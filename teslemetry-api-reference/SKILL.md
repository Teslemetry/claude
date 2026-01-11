---
name: teslemetry-api-reference
description: Use when working with Teslemetry API, Tesla Fleet API, vehicle streaming fields, Python or TypeScript SDKs, or any Tesla vehicle/energy integration code
---

# Teslemetry API Reference

Load reference files on-demand based on what you need:

| File | Use When |
|------|----------|
| `fields-reference.md` | Working with streaming/telemetry fields (241 fields by category) |
| `tesla-endpoints.md` | Working with Tesla Fleet API endpoints (`/api/1/...`) |
| `teslemetry-endpoints.md` | Working with Teslemetry-specific endpoints |
| `sdk-python.md` | Working with Python SDK |
| `sdk-typescript.md` | Working with TypeScript SDK |

## Observability

Traces, logs, and metrics are sent to **BetterStack**. Use the BetterStack MCP for access.

## Updating Reference Data

Regenerate from live APIs:

```bash
node scripts/process-sources.mjs
```
