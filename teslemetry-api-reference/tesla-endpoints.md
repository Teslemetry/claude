# Tesla Fleet API Endpoints

Tesla Fleet API endpoints proxied through Teslemetry (`/api/1/...`)

## Charging

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/1/dx/charging/history` | Charging History |
| GET | `/api/1/dx/charging/invoice/{id}` | Charging Invoice |
| GET | `/api/1/dx/charging/sessions` | Charging Sessions |

## Commands

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/1/vehicles/{vin}/command/actuate_trunk` | Actuate Trunk |
| POST | `/api/1/vehicles/{vin}/command/add_charge_schedule` | Charge Schedule |
| POST | `/api/1/vehicles/{vin}/command/add_precondition_schedule` | Precondition Schedule |
| POST | `/api/1/vehicles/{vin}/command/adjust_volume` | Adjust Volume |
| POST | `/api/1/vehicles/{vin}/command/auto_conditioning_start` | Auto Conditioning Start |
| POST | `/api/1/vehicles/{vin}/command/auto_conditioning_stop` | Auto Conditioning Stop |
| POST | `/api/1/vehicles/{vin}/command/cancel_software_update` | Cancel Software Update |
| POST | `/api/1/vehicles/{vin}/command/charge_max_range` | Charge Max Range |
| POST | `/api/1/vehicles/{vin}/command/charge_port_door_close` | Charge Port Door Close |
| POST | `/api/1/vehicles/{vin}/command/charge_port_door_open` | Charge Port Door Open |
| POST | `/api/1/vehicles/{vin}/command/charge_standard` | Charge Standard |
| POST | `/api/1/vehicles/{vin}/command/charge_start` | Charge Start |
| POST | `/api/1/vehicles/{vin}/command/charge_stop` | Charge Stop |
| POST | `/api/1/vehicles/{vin}/command/clear_pin_to_drive_admin` | Clear PIN to Drive (Admin) |
| POST | `/api/1/vehicles/{vin}/command/door_lock` | Door Lock |
| POST | `/api/1/vehicles/{vin}/command/door_unlock` | Door Unlock |
| POST | `/api/1/vehicles/{vin}/command/erase_user_data` | Erase User Data |
| POST | `/api/1/vehicles/{vin}/command/flash_lights` | Flash Lights |
| POST | `/api/1/vehicles/{vin}/command/guest_mode` | Guest Mode |
| POST | `/api/1/vehicles/{vin}/command/honk_horn` | Honk Horn |
| POST | `/api/1/vehicles/{vin}/command/media_next_fav` | Media Next Favorite |
| POST | `/api/1/vehicles/{vin}/command/media_next_track` | Media Next Track |
| POST | `/api/1/vehicles/{vin}/command/media_prev_fav` | Media Previous Favorite |
| POST | `/api/1/vehicles/{vin}/command/media_prev_track` | Media Previous Track |
| POST | `/api/1/vehicles/{vin}/command/media_toggle_playback` | Media Toggle Playback |
| POST | `/api/1/vehicles/{vin}/command/media_volume_down` | Media Volume Down |
| POST | `/api/1/vehicles/{vin}/command/navigation_gps_request` | Navigation GPS Request |
| POST | `/api/1/vehicles/{vin}/command/navigation_request` | Navigation Request |
| POST | `/api/1/vehicles/{vin}/command/navigation_sc_request` | Navigate to Supercharger Request |
| POST | `/api/1/vehicles/{vin}/command/navigation_waypoints_request` | Navigation Waypoints Request |
| POST | `/api/1/vehicles/{vin}/command/remote_auto_seat_climate_request` | Auto Seat Climate Request |
| POST | `/api/1/vehicles/{vin}/command/remote_auto_steering_wheel_heat_climate_request` | Steering Wheel Auto Heat |
| POST | `/api/1/vehicles/{vin}/command/remote_boombox` | Boombox |
| POST | `/api/1/vehicles/{vin}/command/remote_seat_cooler_request` | Seat Cooler |
| POST | `/api/1/vehicles/{vin}/command/remote_seat_heater_request` | Seat Heater |
| POST | `/api/1/vehicles/{vin}/command/remote_start_drive` | Remote Start |
| POST | `/api/1/vehicles/{vin}/command/remote_steering_wheel_heat_level_request` | Steering Wheel Heat Level |
| POST | `/api/1/vehicles/{vin}/command/remote_steering_wheel_heater_request` | Steering Wheel Heater |
| POST | `/api/1/vehicles/{vin}/command/remove_charge_schedule` | Remove Charge Schedule |
| POST | `/api/1/vehicles/{vin}/command/remove_precondition_schedule` | Remove Precondition Schedule |
| POST | `/api/1/vehicles/{vin}/command/reset_pin_to_drive_pin` | Reset PIN to Drive |
| POST | `/api/1/vehicles/{vin}/command/reset_valet_pin` | Reset Valet PIN |
| POST | `/api/1/vehicles/{vin}/command/schedule_software_update` | Schedule Software Update |
| POST | `/api/1/vehicles/{vin}/command/set_bioweapon_mode` | Bioweapon Defense Mode |
| POST | `/api/1/vehicles/{vin}/command/set_cabin_overheat_protection` | Cabin Overheat Protection |
| POST | `/api/1/vehicles/{vin}/command/set_charge_limit` | Charge Limit |
| POST | `/api/1/vehicles/{vin}/command/set_charging_amps` | Charging Amps |
| POST | `/api/1/vehicles/{vin}/command/set_climate_keeper_mode` | Climate Keeper Mode |
| POST | `/api/1/vehicles/{vin}/command/set_cop_temp` | Cabin Overheat Protection Temperature |
| POST | `/api/1/vehicles/{vin}/command/set_pin_to_drive` | Set PIN to Drive |
| POST | `/api/1/vehicles/{vin}/command/set_preconditioning_max` | Preconditioning Max |
| POST | `/api/1/vehicles/{vin}/command/set_scheduled_charging` | Set Scheduled Charging |
| POST | `/api/1/vehicles/{vin}/command/set_scheduled_departure` | Set Scheduled Departure |
| POST | `/api/1/vehicles/{vin}/command/set_sentry_mode` | Set Sentry Mode |
| POST | `/api/1/vehicles/{vin}/command/set_temps` | Set Temperatures |
| POST | `/api/1/vehicles/{vin}/command/set_valet_mode` | Set Valet Mode |
| POST | `/api/1/vehicles/{vin}/command/set_vehicle_name` | Set Vehicle Name |
| POST | `/api/1/vehicles/{vin}/command/speed_limit_activate` | Speed Limit Activate |
| POST | `/api/1/vehicles/{vin}/command/speed_limit_clear_pin` | Speed Limit Clear PIN |
| POST | `/api/1/vehicles/{vin}/command/speed_limit_clear_pin_admin` | Speed Limit Clear PIN (Admin) |
| POST | `/api/1/vehicles/{vin}/command/speed_limit_deactivate` | Speed Limit Deactivate |
| POST | `/api/1/vehicles/{vin}/command/speed_limit_set_limit` | Speed Limit Set Limit |
| POST | `/api/1/vehicles/{vin}/command/sun_roof_control` | Sunroof Control |
| POST | `/api/1/vehicles/{vin}/command/trigger_homelink` | Trigger HomeLink |
| POST | `/api/1/vehicles/{vin}/command/upcoming_calendar_entries` | Upcoming Calendar Entries |
| POST | `/api/1/vehicles/{vin}/command/window_control` | Window Control |

## Energy

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/1/energy_sites/{id}/backup` | Backup |
| GET | `/api/1/energy_sites/{id}/calendar_history` | Backup and Energy History |
| POST | `/api/1/energy_sites/{id}/grid_import_export` | Grid Import/Export |
| GET | `/api/1/energy_sites/{id}/live_status` | Live Status |
| POST | `/api/1/energy_sites/{id}/off_grid_vehicle_charging_reserve` | Off Grid Vehicle Charging Reserve |
| POST | `/api/1/energy_sites/{id}/operation` | Operating Mode |
| GET | `/api/1/energy_sites/{id}/site_info` | Site Information |
| POST | `/api/1/energy_sites/{id}/storm_mode` | Storm Mode |
| GET | `/api/1/energy_sites/{id}/telemetry_history` | Charging History |
| POST | `/api/1/energy_sites/{id}/time_of_use_settings` | Time of Use Settings |

## General

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/1/products` | Products |

## Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/1/users/feature_config` | Feature Flags |
| GET | `/api/1/users/me` | User Data |
| GET | `/api/1/users/orders` | Orders |
| GET | `/api/1/users/region` | Region |

## Vehicle

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/1/dx/warranty/details` | Warranty Details |

## Vehicles

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/1/dx/vehicles/options` | Options |
| GET | `/api/1/dx/vehicles/subscriptions/eligible` | Eligible Subscriptions |
| GET | `/api/1/dx/vehicles/upgrade/eligibility` | Eligible Upgrades |
| GET | `/api/1/vehicles` | List |
| GET | `/api/1/vehicles/{vin}` | Vehicle State |
| POST | `/api/1/vehicles/{vin}/charge_history` | Charge History |
| POST | `/api/1/vehicles/{vin}/custom_command/charge_on_solar` | Charge On Solar |
| POST | `/api/1/vehicles/{vin}/custom_command/clear_pin_to_drive` | Clear PIN to Drive |
| POST | `/api/1/vehicles/{vin}/custom_command/closure` | Closure |
| POST | `/api/1/vehicles/{vin}/custom_command/dashcam_save` | Dashcam save |
| POST | `/api/1/vehicles/{vin}/custom_command/ping` | Ping |
| POST | `/api/1/vehicles/{vin}/custom_command/play_video` | Play Video |
| POST | `/api/1/vehicles/{vin}/custom_command/remove_key` | Remove all impermanent keys |
| POST | `/api/1/vehicles/{vin}/custom_command/seat_heater` | Seat Heaters |
| POST | `/api/1/vehicles/{vin}/custom_command/start_light_show` | Start Light Show |
| POST | `/api/1/vehicles/{vin}/custom_command/stop_light_show` | Stop Light Show |
| GET | `/api/1/vehicles/{vin}/drivers` | Drivers |
| DELETE | `/api/1/vehicles/{vin}/drivers` | Remove Driver |
| DELETE | `/api/1/vehicles/{vin}/fleet_telemetry_config` | Stop Fleet Telemetry |
| GET | `/api/1/vehicles/{vin}/fleet_telemetry_config` | Fleet Telemetry Config |
| GET | `/api/1/vehicles/{vin}/fleet_telemetry_errors` | Fleet Telemetry Errors |
| GET | `/api/1/vehicles/{vin}/invitations` | Invitations |
| POST | `/api/1/vehicles/{vin}/invitations` | Create Invitation |
| POST | `/api/1/vehicles/{vin}/invitations/{id}/revoke` | Revoke Invitation |
| GET | `/api/1/vehicles/{vin}/mobile_enabled` | Mobile Enabled |
| GET | `/api/1/vehicles/{vin}/nearby_charging_sites` | Nearby Charging Sites |
| GET | `/api/1/vehicles/{vin}/recent_alerts` | Recent Alerts |
| GET | `/api/1/vehicles/{vin}/release_notes` | Release Notes |
| GET | `/api/1/vehicles/{vin}/service_data` | Service Data |
| GET | `/api/1/vehicles/{vin}/vehicle_data` | Vehicle Data |
| POST | `/api/1/vehicles/{vin}/wake_up` | Wake Up |
| POST | `/api/1/vehicles/fleet_status` | Fleet Status |
| POST | `/api/1/vehicles/fleet_telemetry_config` | Configure Fleet Telemetry |
| POST | `/api/1/vehicles/invitations/redeem` | Redeem Invitation |

