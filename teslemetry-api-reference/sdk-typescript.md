# Teslemetry TypeScript SDK Reference

**Repo:** https://github.com/Teslemetry/typescript-teslemetry/tree/main/packages/api
**Setup:** https://github.com/Teslemetry/typescript-teslemetry/tree/main/packages/api#teslemetry-typescript-sdk

## Quick Start

```typescript
import { TeslemetryVehicleApi, TeslemetryEnergyApi } from '@teslemetry/api';

const vehicle = new TeslemetryVehicleApi({ accessToken: '...', vin: 'VIN' });
await vehicle.wakeUp();
const data = await vehicle.vehicleData();

const energy = new TeslemetryEnergyApi({ accessToken: '...', energySiteId: 123 });
const status = await energy.getLiveStatus();
```

## Event Subscription

Both APIs extend EventEmitter for real-time updates:

```typescript
vehicle.on('vehicleData', (data) => { /* handle update */ });
vehicle.on('error', (error) => { /* handle error */ });
energy.on('liveStatus', (data) => { /* handle update */ });
```

---

## TeslemetryVehicleApi Methods

### State & Info

| Method | Returns |
|--------|---------|
| `state()` | `Promise<GetApi1VehiclesByVinResponse>` |
| `vehicleData(endpoints?, use_cache?)` | `Promise<GetApi1VehiclesByVinVehicleDataResponse>` |
| `refreshData()` | `Promise<any>` |
| `getVehicleConfig()` | `Promise<GetApiVehicleConfigByVinResponse>` |
| `getConfig()` | `Promise<GetApiConfigByVinResponse>` |
| `patchConfig(fields)` | `Promise<any>` |
| `postConfig(body)` | `Promise<any>` |
| `deleteConfig()` | `Promise<any>` |
| `getMobileEnabled()` | `Promise<GetApi1VehiclesByVinMobileEnabledResponse>` |
| `getNearbyChargingSites()` | `Promise<GetApi1VehiclesByVinNearbyChargingSitesResponse>` |
| `getRecentAlerts()` | `Promise<GetApi1VehiclesByVinRecentAlertsResponse>` |
| `getReleaseNotes()` | `Promise<GetApi1VehiclesByVinReleaseNotesResponse>` |
| `getServiceData()` | `Promise<GetApi1VehiclesByVinServiceDataResponse>` |
| `chargeHistory()` | `Promise<any>` |

### Wake

| Method | Returns |
|--------|---------|
| `wakeUp()` | `Promise<any>` |

### Climate

| Method | Returns |
|--------|---------|
| `startAutoConditioning()` | `Promise<any>` |
| `stopAutoConditioning()` | `Promise<any>` |
| `setTemps(driver_temp, passenger_temp)` | `Promise<any>` |
| `setPreconditioningMax(on, manual_override)` | `Promise<any>` |
| `setClimateKeeperMode(climate_keeper_mode: 0\|1\|2\|3)` | `Promise<any>` |
| `setCabinOverheatProtection(body)` | `Promise<any>` |
| `setCopTemp(cop_temp: 0\|1\|2)` | `Promise<any>` |
| `setBioweaponDefenseMode(on, manual_override)` | `Promise<any>` |

### Seats & Steering Wheel

| Method | Returns |
|--------|---------|
| `setSeatHeater(seat, level)` | `Promise<any>` |
| `setSeatCooler(seat_position, seat_cooler_level)` | `Promise<any>` |
| `setAutoSeatClimate(auto_seat_position, auto_climate_on)` | `Promise<any>` |
| `setSeatHeaters(body)` | `Promise<any>` |
| `setSteeringWheelHeater(on)` | `Promise<any>` |
| `setSteeringWheelHeatLevel(level: 0\|1\|3)` | `Promise<any>` |
| `setAutoSteeringWheelHeat(on)` | `Promise<any>` |

### Charging

| Method | Returns |
|--------|---------|
| `startCharging()` | `Promise<any>` |
| `stopCharging()` | `Promise<any>` |
| `chargeStandard()` | `Promise<any>` |
| `chargeMaxRange()` | `Promise<any>` |
| `openChargePort()` | `Promise<any>` |
| `closeChargePort()` | `Promise<any>` |
| `setChargeLimit(percent)` | `Promise<any>` |
| `setChargingAmps(charging_amps)` | `Promise<any>` |
| `setScheduledCharging(enable, time)` | `Promise<any>` |
| `setScheduledDeparture(body)` | `Promise<any>` |
| `addChargeSchedule(body)` | `Promise<any>` |
| `removeChargeSchedule(id)` | `Promise<any>` |
| `chargeOnSolar(enabled?, lowerChargeLimit?, upperChargeLimit?)` | `Promise<any>` |

### Doors, Trunk, Windows

| Method | Returns |
|--------|---------|
| `lockDoors()` | `Promise<any>` |
| `unlockDoors()` | `Promise<any>` |
| `actuateTrunk(which_trunk: "front"\|"rear")` | `Promise<any>` |
| `closure(body)` | `Promise<any>` |
| `windowControl(command: "vent"\|"close", lat, lon)` | `Promise<any>` |
| `sunRoofControl(state: "vent"\|"close"\|"stop")` | `Promise<any>` |

### Security

| Method | Returns |
|--------|---------|
| `setSentryMode(on)` | `Promise<any>` |
| `setValetMode(on, password)` | `Promise<any>` |
| `resetValetPin()` | `Promise<any>` |
| `setPinToDrive(on, password)` | `Promise<any>` |
| `resetPinToDrive()` | `Promise<any>` |
| `clearPinToDriveAdmin()` | `Promise<any>` |
| `clearPinToDrive(pin)` | `Promise<any>` |
| `setGuestMode(enable)` | `Promise<any>` |

### Speed Limit

| Method | Returns |
|--------|---------|
| `speedLimitActivate(pin)` | `Promise<any>` |
| `speedLimitDeactivate(pin)` | `Promise<any>` |
| `speedLimitSetLimit(limit_mph)` | `Promise<any>` |
| `speedLimitClearPin(pin)` | `Promise<any>` |
| `speedLimitClearPinAdmin()` | `Promise<any>` |

### Navigation

| Method | Returns |
|--------|---------|
| `navigationRequest(body)` | `Promise<any>` |
| `navigationGpsRequest(body)` | `Promise<any>` |
| `navigationSuperchargerRequest(body)` | `Promise<any>` |
| `navigationWaypointsRequest(body)` | `Promise<any>` |
| `upcomingCalendarEntries(calendar_data)` | `Promise<any>` |

### Media

| Method | Returns |
|--------|---------|
| `mediaTogglePlayback()` | `Promise<any>` |
| `mediaNextTrack()` | `Promise<any>` |
| `mediaPreviousTrack()` | `Promise<any>` |
| `mediaNextFavorite()` | `Promise<any>` |
| `mediaPreviousFavorite()` | `Promise<any>` |
| `mediaVolumeDown()` | `Promise<any>` |
| `adjustVolume(volume)` | `Promise<any>` |
| `remoteBoombox(sound?)` | `Promise<any>` |

### Alerts

| Method | Returns |
|--------|---------|
| `flashLights()` | `Promise<any>` |
| `honkHorn()` | `Promise<any>` |

### Software Updates

| Method | Returns |
|--------|---------|
| `scheduleSoftwareUpdate(offset_sec)` | `Promise<any>` |
| `cancelSoftwareUpdate()` | `Promise<any>` |

### Schedules

| Method | Returns |
|--------|---------|
| `addPreconditionSchedule(body)` | `Promise<any>` |
| `removePreconditionSchedule(id)` | `Promise<any>` |

### Other

| Method | Returns |
|--------|---------|
| `setVehicleName(vehicle_name)` | `Promise<any>` |
| `eraseUserData()` | `Promise<any>` |
| `triggerHomelink(lat, lon)` | `Promise<any>` |
| `remoteStart()` | `Promise<any>` |
| `ping()` | `Promise<any>` |
| `dashcamSave()` | `Promise<any>` |
| `playVideo(url)` | `Promise<any>` |
| `startLightShow(show_index, start_time?, volume?, dance_moves?)` | `Promise<any>` |
| `stopLightShow()` | `Promise<any>` |
| `removeAllImpermanentKeys()` | `Promise<any>` |

### Sharing & Drivers

| Method | Returns |
|--------|---------|
| `getDrivers()` | `Promise<GetApi1VehiclesByVinDriversResponse>` |
| `removeDriver(share_user_id)` | `Promise<any>` |
| `getInvitations()` | `Promise<GetApi1VehiclesByVinInvitationsResponse>` |
| `createInvitation()` | `Promise<any>` |
| `revokeInvitation(id)` | `Promise<any>` |

### Fleet Telemetry

| Method | Returns |
|--------|---------|
| `getFleetTelemetryConfig()` | `Promise<GetApi1VehiclesByVinFleetTelemetryConfigResponse>` |
| `deleteFleetTelemetryConfig()` | `Promise<any>` |
| `getFleetTelemetryErrors()` | `Promise<GetApi1VehiclesByVinFleetTelemetryErrorsResponse>` |

### Account Info

| Method | Returns |
|--------|---------|
| `getEligibleSubscriptions()` | `Promise<any>` |
| `getEligibleUpgrades()` | `Promise<any>` |
| `getVehicleOptions()` | `Promise<any>` |
| `getWarrantyDetails()` | `Promise<any>` |

---

## TeslemetryEnergyApi Methods

```typescript
const energy = new TeslemetryEnergyApi({ accessToken: '...', energySiteId: 123 });
```

| Method | Returns |
|--------|---------|
| `getSiteInfo()` | `Promise<any>` |
| `getLiveStatus()` | `Promise<any>` |
| `setBackupReserve(backup_reserve_percent)` | `Promise<any>` |
| `getCalendarHistory(kind: "backup"\|"energy", period, start_date?, end_date?, time_zone?)` | `Promise<BackupHistoryResponse \| EnergyHistoryResponse>` |
| `getTelemetryHistory(start_date?, end_date?, time_zone?)` | `Promise<any>` |
| `setOperationMode(default_real_mode: "self_consumption"\|"backup"\|"autonomous")` | `Promise<any>` |
| `setStormMode(enabled)` | `Promise<any>` |
| `gridImportExport(customer_preferred_export_rule: "battery_ok"\|"pv_only"\|"never", disallow_charge?)` | `Promise<any>` |
| `setOffGridVehicleChargingReserve(off_grid_vehicle_charging_reserve_percent)` | `Promise<any>` |
| `requestPolling(endpoint)` | `() => void` |
