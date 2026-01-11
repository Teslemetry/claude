#!/usr/bin/env node
/**
 * Teslemetry API Reference Data Processor
 *
 * Fetches and processes Teslemetry API data into context-efficient reference files.
 * Run with: node process-sources.mjs
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.join(__dirname, '..');

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.json();
}

function processFields(fields) {
  const categories = {};

  for (const [name, field] of Object.entries(fields)) {
    const category = field.category || 'Other';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push({ name, field });
  }

  let output = '# Teslemetry Streaming Fields Reference\n\n';
  output += 'Real-time streaming fields available via Fleet Telemetry.\n\n';

  // Create a table of contents
  output += '## Categories\n\n';
  const sortedCategories = Object.keys(categories).sort();
  for (const cat of sortedCategories) {
    output += `- [${cat}](#${cat.toLowerCase().replace(/\s+/g, '-')}) (${categories[cat].length})\n`;
  }
  output += '\n---\n\n';

  // Output each category
  for (const category of sortedCategories) {
    output += `## ${category}\n\n`;
    output += '| Field | Type | Description |\n';
    output += '|-------|------|-------------|\n';

    const sortedFields = categories[category].sort((a, b) => a.name.localeCompare(b.name));
    for (const { name, field } of sortedFields) {
      let typeStr = field.type;
      if (field.enum) {
        typeStr = `enum: ${field.enum.slice(0, 3).join(', ')}${field.enum.length > 3 ? '...' : ''}`;
      }
      if (field.minimum !== undefined || field.maximum !== undefined) {
        typeStr += ` [${field.minimum ?? ''}..${field.maximum ?? ''}]`;
      }
      const desc = (field.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ').slice(0, 100);
      output += `| \`${name}\` | ${typeStr} | ${desc} |\n`;
    }
    output += '\n';
  }

  return output;
}

function processOpenAPI(spec) {
  const teslaEndpoints = [];
  const teslemetryEndpoints = [];

  for (const [pathStr, methods] of Object.entries(spec.paths)) {
    for (const [method, details] of Object.entries(methods)) {
      if (method === 'parameters') continue;

      const endpoint = {
        path: pathStr,
        method: method.toUpperCase(),
        summary: details.summary || details.description || '',
        tags: details.tags || []
      };

      if (pathStr.startsWith('/api/1/')) {
        teslaEndpoints.push(endpoint);
      } else if (pathStr.startsWith('/api/')) {
        teslemetryEndpoints.push(endpoint);
      }
    }
  }

  // Group Tesla endpoints by category
  const teslaByCategory = {};
  for (const ep of teslaEndpoints) {
    const parts = ep.path.split('/');
    let category = 'general';
    if (parts.includes('command')) category = 'commands';
    else if (parts.includes('vehicles')) category = 'vehicles';
    else if (parts.includes('energy_sites')) category = 'energy';
    else if (parts.includes('users')) category = 'users';
    else if (parts.includes('partner')) category = 'partner';
    else if (ep.tags.length > 0) category = ep.tags[0].toLowerCase();

    if (!teslaByCategory[category]) teslaByCategory[category] = [];
    teslaByCategory[category].push(ep);
  }

  let teslaOutput = '# Tesla Fleet API Endpoints\n\n';
  teslaOutput += 'Tesla Fleet API endpoints proxied through Teslemetry (`/api/1/...`)\n\n';

  for (const [category, endpoints] of Object.entries(teslaByCategory).sort()) {
    teslaOutput += `## ${category.charAt(0).toUpperCase() + category.slice(1)}\n\n`;
    teslaOutput += '| Method | Endpoint | Description |\n';
    teslaOutput += '|--------|----------|-------------|\n';

    for (const ep of endpoints.sort((a, b) => a.path.localeCompare(b.path))) {
      const desc = ep.summary.replace(/\|/g, '\\|').replace(/\n/g, ' ').slice(0, 80);
      teslaOutput += `| ${ep.method} | \`${ep.path}\` | ${desc} |\n`;
    }
    teslaOutput += '\n';
  }

  // Teslemetry-specific endpoints
  let teslemetryOutput = '# Teslemetry-Specific Endpoints\n\n';
  teslemetryOutput += 'Teslemetry-specific functionality beyond Tesla Fleet API.\n\n';
  teslemetryOutput += '| Method | Endpoint | Description |\n';
  teslemetryOutput += '|--------|----------|-------------|\n';

  for (const ep of teslemetryEndpoints.sort((a, b) => a.path.localeCompare(b.path))) {
    const desc = ep.summary.replace(/\|/g, '\\|').replace(/\n/g, ' ').slice(0, 80);
    teslemetryOutput += `| ${ep.method} | \`${ep.path}\` | ${desc} |\n`;
  }

  return { tesla: teslaOutput, teslemetry: teslemetryOutput };
}

async function main() {
  console.log('Fetching Teslemetry API data...\n');

  // Fetch fields.json
  console.log('Fetching fields.json...');
  const fields = await fetchJSON('https://api.teslemetry.com/fields.json');
  const fieldsOutput = processFields(fields);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'fields-reference.md'), fieldsOutput);
  console.log(`  -> Generated fields-reference.md (${Object.keys(fields).length} fields)`);

  // Fetch openapi.json
  console.log('Fetching openapi.json...');
  const openapi = await fetchJSON('https://api.teslemetry.com/openapi.json');
  const { tesla, teslemetry } = processOpenAPI(openapi);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'tesla-endpoints.md'), tesla);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'teslemetry-endpoints.md'), teslemetry);
  console.log(`  -> Generated tesla-endpoints.md and teslemetry-endpoints.md`);

  console.log('\nDone! Reference files generated.');
}

main().catch(console.error);
