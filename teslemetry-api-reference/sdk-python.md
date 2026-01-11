# Teslemetry Python SDK Reference

**Repo:** https://github.com/Teslemetry/python-tesla-fleet-api
**Setup:** https://github.com/Teslemetry/python-tesla-fleet-api/blob/main/README.md

## Quick Start

```python
from tesla_fleet_api import Teslemetry

api = Teslemetry(access_token="...")
vehicle = api.vehicle("VIN")
await vehicle.wake_up()
data = await vehicle.vehicle_data()

energy = api.energy(site_id)
status = await energy.live_status()
```

## Vehicle Methods (TeslemetryVehicle)

### State & Info

| Method | Description |
|--------|-------------|
| `vehicle()` | Returns vehicle info |
| `vehicle_data(endpoints)` | Live call to vehicle, returns data for specified endpoints |
| `mobile_enabled()` | Check if mobile access enabled |
| `nearby_charging_sites(count, radius, detail)` | Charging sites near vehicle |
| `recent_alerts()` | List of recent alerts |
| `service_data()` | Service data |
| `release_notes(staged, language)` | Firmware release notes |
| `options(vin)` | Vehicle option details |
| `warranty_details(vin)` | Warranty details |
| `list(page, per_page)` | List vehicles on account |

### Wake

| Method | Description |
|--------|-------------|
| `wake_up()` | Wake vehicle from sleep |

### Climate

| Method | Description |
|--------|-------------|
| `auto_conditioning_start()` | Start climate preconditioning |
| `auto_conditioning_stop()` | Stop climate preconditioning |
| `set_temps(driver_temp, passenger_temp)` | Set cabin temperatures |
| `set_preconditioning_max(on, manual_override)` | Override preconditioning |
| `set_climate_keeper_mode(climate_keeper_mode)` | Enable climate keeper (Camp/Dog/Keep) |
| `set_cabin_overheat_protection(on, fan_only)` | Set overheat protection |
| `set_cop_temp(cop_temp)` | Cabin overheat protection temperature |
| `set_bioweapon_mode(on, manual_override)` | Bioweapon defense mode |

### Seats & Steering Wheel

| Method | Description |
|--------|-------------|
| `remote_seat_heater_request(seat_position, seat_heater_level)` | Set seat heating |
| `remote_seat_cooler_request(seat_position, seat_cooler_level)` | Set seat cooling |
| `remote_auto_seat_climate_request(auto_seat_position, auto_climate_on)` | Auto seat climate |
| `remote_steering_wheel_heater_request(on)` | Steering wheel heater on/off |
| `remote_steering_wheel_heat_level_request(level)` | Steering wheel heat level |
| `remote_auto_steering_wheel_heat_climate_request(on)` | Auto steering wheel heat |

### Charging

| Method | Description |
|--------|-------------|
| `charge_start()` | Start charging |
| `charge_stop()` | Stop charging |
| `charge_standard()` | Charge to standard limit |
| `charge_max_range()` | Charge to max range |
| `charge_port_door_open()` | Open charge port |
| `charge_port_door_close()` | Close charge port |
| `set_charge_limit(percent)` | Set charge limit percentage |
| `set_charging_amps(charging_amps)` | Set charging amps |
| `set_scheduled_charging(enable, time)` | Schedule charging (time = minutes after midnight) |
| `add_charge_schedule(...)` | Add charging schedule |
| `remove_charge_schedule(id)` | Remove charging schedule |

### Doors, Trunk, Windows

| Method | Description |
|--------|-------------|
| `door_lock()` | Lock doors |
| `door_unlock()` | Unlock doors |
| `actuate_trunk(which_trunk)` | Open/close front or rear trunk |
| `window_control(command, lat, lon)` | Vent or close windows |
| `sun_roof_control(state)` | Control panoramic sunroof |

### Security

| Method | Description |
|--------|-------------|
| `set_sentry_mode(on)` | Enable/disable sentry mode |
| `set_valet_mode(on, password)` | Enable valet mode with PIN |
| `reset_valet_pin()` | Remove valet PIN |
| `set_pin_to_drive(on, password)` | Set PIN to drive |
| `reset_pin_to_drive_pin()` | Remove PIN to drive |
| `clear_pin_to_drive_admin(pin)` | Admin clear PIN to drive (2023.44+) |
| `guest_mode(enable)` | Restrict UI for guests |

### Speed Limit

| Method | Description |
|--------|-------------|
| `speed_limit_activate(pin)` | Activate speed limit with PIN |
| `speed_limit_deactivate(pin)` | Deactivate speed limit |
| `speed_limit_set_limit(limit_mph)` | Set speed limit value |
| `speed_limit_clear_pin(pin)` | Clear speed limit PIN |
| `speed_limit_clear_pin_admin()` | Admin clear speed limit (2023.38+) |

### Navigation

| Method | Description |
|--------|-------------|
| `navigation_request(value, type, locale, timestamp_ms)` | Send location to nav |
| `navigation_gps_request(lat, lon, order)` | Navigate to coordinates |
| `navigation_sc_request(id, order)` | Navigate to supercharger |

### Media

| Method | Description |
|--------|-------------|
| `media_toggle_playback()` | Play/pause |
| `media_next_track()` | Next track |
| `media_prev_track()` | Previous track |
| `media_next_fav()` | Next favorite |
| `media_prev_fav()` | Previous favorite |
| `media_volume_down()` | Volume down |
| `adjust_volume(volume)` | Set volume (0.0-11.0) |
| `remote_boombox(sound)` | Play external speaker sound |

### Alerts

| Method | Description |
|--------|-------------|
| `flash_lights()` | Flash headlights |
| `honk_horn()` | Honk horn |

### Software Updates

| Method | Description |
|--------|-------------|
| `schedule_software_update(offset_sec)` | Schedule OTA update |
| `cancel_software_update()` | Cancel update countdown |

### Scheduled Departure

| Method | Description |
|--------|-------------|
| `set_scheduled_departure(enable, preconditioning_enabled, ...)` | Set departure schedule |
| `add_precondition_schedule(...)` | Add precondition schedule |
| `remove_precondition_schedule(id)` | Remove precondition schedule |

### Other

| Method | Description |
|--------|-------------|
| `set_vehicle_name(vehicle_name)` | Change vehicle name |
| `erase_user_data()` | Erase user data from UI |
| `take_drivenote(note)` | Record drive note (80 char max) |
| `trigger_homelink(token, lat, lon)` | Trigger HomeLink |
| `remote_start_drive()` | Remote start (keyless driving required) |
| `upcoming_calendar_entries(calendar_data)` | Send calendar to vehicle |

### Sharing & Drivers

| Method | Description |
|--------|-------------|
| `drivers()` | List allowed drivers (owner only) |
| `drivers_remove(share_user_id)` | Remove driver access |
| `share_invites()` | List share invites |
| `share_invites_create()` | Create share invite |
| `share_invites_redeem(code)` | Redeem share invite |
| `share_invites_revoke(id)` | Revoke share invite |

### Fleet Telemetry

| Method | Description |
|--------|-------------|
| `fleet_status(vins)` | Check command protocol status |
| `fleet_telemetry_config_create(config)` | Configure fleet telemetry |
| `fleet_telemetry_config_get()` | Get telemetry config |
| `fleet_telemetry_config_delete()` | Delete telemetry config |

---

## Energy Site Methods (TeslemetryEnergy)

```python
energy = api.energy(site_id)
```

| Method | Description |
|--------|-------------|
| `site_info()` | Site info, settings, capabilities |
| `live_status()` | Live power, state of energy, grid status |
| `backup(backup_reserve_percent)` | Set backup reserve percentage |
| `backup_history(period, start_date, end_date, time_zone)` | Off-grid event history |
| `energy_history(period, start_date, end_date, time_zone)` | Energy measurements |
| `charge_history(start_date, end_date, time_zone)` | Wall connector history |
| `operation(default_real_mode)` | Set operating mode |
| `storm_mode(enabled)` | Enable/disable storm watch |
| `grid_import_export(disallow_charge, export_rule)` | Grid import/export settings |
| `off_grid_vehicle_charging_reserve(percent)` | Off-grid charging reserve |
| `time_of_use_settings(settings)` | Time-of-use tariff config |
