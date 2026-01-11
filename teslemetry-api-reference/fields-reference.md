# Teslemetry Streaming Fields Reference

Real-time streaming fields available via Fleet Telemetry.

## Categories

- [Charging](#charging) (59)
- [Climate](#climate) (29)
- [Driving](#driving) (10)
- [Location](#location) (13)
- [Media](#media) (11)
- [Powertrain](#powertrain) (35)
- [Safety](#safety) (14)
- [Service](#service) (19)
- [User Preference](#user-preference) (5)
- [Vehicle Configuration](#vehicle-configuration) (14)
- [Vehicle State](#vehicle-state) (32)

---

## Charging

| Field | Type | Description |
|-------|------|-------------|
| `ACChargingEnergyIn` | float | The amount of energy in kWh added during an AC charging session. This is measured from the charger.  |
| `ACChargingPower` | float | Total AC charger input power. |
| `BatteryHeaterOn` | boolean | If the battery is actively heating itself. This may be done in cold weather or when preconditioning  |
| `BatteryLevel` | float | The state of charge of the vehicle, as a percent of total battery capacity. |
| `BmsFullchargecomplete` | boolean | Indicates BMS is fully charged. |
| `BMSState` | enum | BMS operating state. |
| `BrickVoltageMax` | float | Brick voltage maximum. |
| `BrickVoltageMin` | float | Brick voltage minimum. |
| `ChargeAmps` | float | AC charger's sensed input line current. |
| `ChargeCurrentRequest` | integer | The requested amps to charge the vehicle. |
| `ChargeCurrentRequestMax` | integer | The maximum available amps available to charge. |
| `ChargeEnableRequest` | boolean | If charging is enabled. |
| `ChargeLimitSoc` | integer | The state of charge at which charging will terminate, as a percentage of battery capacity. |
| `ChargePort` | enum | The type of charge port installed. |
| `ChargePortColdWeatherMode` | boolean | Indicates whether the charge port is in cold weather mode. |
| `ChargePortDoorOpen` | boolean | Indicates whether the charge port door is open based only on the door potentiometer. |
| `ChargePortLatch` | enum | Sensed state of the charge port latch. Early Model 3 vehicles will not latch in cold weather (below  |
| `ChargeRateMilePerHour` | float | The number of miles being added per hour of charging, given the current charge rate. |
| `ChargerPhases` | integer | The number of phases available from the connected charger. |
| `ChargerVoltage` | float | RMS value of AC charger's sensed input voltage. This field changes frequently, even when not chargin |
| `ChargeState` | string | The non-detailed charge state of the vehicle. See DetailedChargeState for detailed charge state data |
| `ChargingCableType` | enum | The type of charging cable connected to the vehicle. If no charging cable is present, Invalid will b |
| `DCChargingEnergyIn` | float | The amount of energy in kWh added during a charging session. This is measured at the battery. It can |
| `DCChargingPower` | float | The kilowatts added during a DC charging session. |
| `DCDCEnable` | boolean | The state of the PCS's DCDC enable line. |
| `DetailedChargeState` | enum | The detailed charge state, rather than ChargeState which provides little detail. This field is added |
| `EnergyRemaining` | float | The nominal energy remaining in the battery pack, measured in kWh. |
| `EstBatteryRange` | float | The estimated range of the vehicle given its current state of charge. Takes driving conditions into  |
| `EstimatedHoursToChargeTermination` | float | The number of hours until reaching the desired state of charge. Desired state of charge is defined b |
| `ExpectedEnergyPercentAtTripArrival` | float | The expected energy percentage upon arriving at destination. If no navigation destination is set, In |
| `FastChargerPresent` | boolean | Is a fast charger is present. |
| `FastChargerType` | enum | The type of fast charger connected to the vehicle. |
| `IdealBatteryRange` | float | The current range of the vehicle, assuming ideal conditions (speed, weather, etc). |
| `LifetimeEnergyGainedRegen` | float | Total energy gained from regeneration in kWh. |
| `LifetimeEnergyUsed` | float | Total energy-lost kWh count during discharging. |
| `LifetimeEnergyUsedDrive` | float | Total energy-lost kWh count during driving. |
| `ModuleTempMax` | float | The maximum thermistor temperature. |
| `ModuleTempMin` | float | The minimum thermistor temperature. |
| `NotEnoughPowerToHeat` | boolean | If the battery does not have enough power available to heat itself. |
| `NumBrickVoltageMax` | integer | Brick number with maximum voltage (1 indexed). |
| `NumBrickVoltageMin` | integer | Brick number with minimum voltage (1 indexed). |
| `NumModuleTempMax` | integer | The max thermistor temperature module ID. |
| `NumModuleTempMin` | integer | The min thermistor temperature module ID. |
| `PackCurrent` | float | Current measured at the HV contactors of the HV battery. |
| `PackVoltage` | float | Voltage measured on the battery side of the HV contactors. |
| `PowershareHoursLeft` | integer | The number of hours remaining through Powershare. |
| `PowershareInstantaneousPowerKW` | float | Displays the current AC real power output from Power Conversion System 2 (PCS2) in Vehicle-to-Everyt |
| `PowershareStatus` | enum | The state of Powershare. |
| `PowershareStopReason` | enum | The reason Powershare has stopped. |
| `PowershareType` | enum | The type of Powershare currently active. |
| `PreconditioningEnabled` | boolean | If the vehicle is preconditioning. |
| `RatedRange` | float | The officially rated range of the vehicle given its current state of charge. |
| `ScheduledChargingMode` | enum | The mode for scheduled charging. |
| `ScheduledChargingPending` | boolean | If a charge session is scheduled. |
| `ScheduledChargingStartTime` | timestamp | The time charging is scheduled to begin. Timestamp fields report incorrectly. Treating the reported  |
| `ScheduledDepartureTime` | timestamp | The scheduled departure time for the vehicle, which currently has a timezone issue. |
| `Soc` | float | The usable state of charge of the vehicle, as a percent of total battery capacity. |
| `SuperchargerSessionTripPlanner` | boolean | If the current supercharging session is part of a trip plan. |
| `TimeToFullCharge` | float | The number of hours until charging is complete. If the charge session is part of a trip, this is the |

## Climate

| Field | Type | Description |
|-------|------|-------------|
| `AutoSeatClimateLeft` | boolean | If the left front seat has auto seat climate enabled. |
| `AutoSeatClimateRight` | boolean | If the right front seat has auto seat climate enabled. |
| `CabinOverheatProtectionMode` | enum | The mode of cabin overheat protection. |
| `CabinOverheatProtectionTemperatureLimit` | enum | The temperature limit of cabin overheat protection, represented as low, medium, or high. |
| `ClimateKeeperMode` | enum | The climate keeper mode. |
| `ClimateSeatCoolingFrontLeft` | integer | The seat cooling level requested by the front left seat. |
| `ClimateSeatCoolingFrontRight` | integer | The seat cooling level requested by the front right seat. |
| `DefrostForPreconditioning` | boolean | If the vehicle is defrosting due to preconditioning. |
| `DefrostMode` | enum | The state of the vehicle defrost. |
| `HvacACEnabled` | boolean | If AC is enabled. |
| `HvacAutoMode` | enum | The state of HVAC auto mode. |
| `HvacFanSpeed` | integer | The HVAC fan speed. |
| `HvacFanStatus` | integer | Cabin airflow blower set speed segment. |
| `HvacLeftTemperatureRequest` | float | The requested temperature for the left front side of the vehicle. Reported in celsius. This differs  |
| `HvacPower` | enum | The power state of the HVAC system. |
| `HvacRightTemperatureRequest` | float | The requested temperature for the right front side of the vehicle. Reported in celsius. This differs |
| `HvacSteeringWheelHeatAuto` | boolean | If the steering wheel heat is set to auto. |
| `HvacSteeringWheelHeatLevel` | integer | The level of steering wheel heat. |
| `InsideTemp` | float | Estimated temperature of the cabin (in Celsius). This field frequently changes in small increments a |
| `OutsideTemp` | float | Filtered ambient temperature based on vehicle speed. |
| `RearDefrostEnabled` | boolean | If rear defrost is enabled. |
| `RearDisplayHvacEnabled` | boolean | If HVAC is enabled on the rear display. |
| `SeatHeaterLeft` | integer | The level of the front left seat heater. Values range from 0 (off) to 3 (high). |
| `SeatHeaterRearCenter` | integer | The level of the rear center seat heater. Values range from 0 (off) to 3 (high). |
| `SeatHeaterRearLeft` | integer | The level of the rear left seat heater. Values range from 0 (off) to 3 (high). |
| `SeatHeaterRearRight` | integer | The level of the rear right seat heater. Values range from 0 (off) to 3 (high). |
| `SeatHeaterRight` | integer | The level of the right seat heater. Values range from 0 (off) to 3 (high). |
| `SeatVentEnabled` | boolean | If front seat ventilation is enabled. |
| `WiperHeatEnabled` | boolean | If the wiper heater are turned on. |

## Driving

| Field | Type | Description |
|-------|------|-------------|
| `BrakePedal` | boolean | Status of the brake pedal. |
| `BrakePedalPos` | float | Master cylinder pressure measured in the ESP. |
| `CruiseSetSpeed` | float | Cruise control set point. |
| `DriveRail` | boolean | On/Off state of drive power state. |
| `Gear` | enum | Detects the current operating gear reported by the drive inverter. |
| `LateralAcceleration` | float | The lateral acceleration of the vehicle measured in Gs. |
| `LongitudinalAcceleration` | float | The longitudinal acceleration of the vehicle measured in Gs. |
| `PedalPosition` | float | The position of the accelerator pedal. |
| `RouteTrafficMinutesDelay` | float | The number of minutes delay on the active navigation route. |
| `VehicleSpeed` | float | The speed of the vehicle is miles per hour. |

## Location

| Field | Type | Description |
|-------|------|-------------|
| `DestinationLocation` | location | The coordinates of the current navigation route's destination. If no navigation destination is set,  |
| `DestinationName` | string | The name of the active navigation destination. If no destination is present, Invalid will be reporte |
| `GpsHeading` | float | The orientation of the vehicle. 0 represents North, 90 represents East, etc. |
| `GpsState` | boolean | If GPS lock is acquired. |
| `LocatedAtFavorite` | boolean | If the vehicle is located at a favorite location of the active driver profile. |
| `LocatedAtHome` | boolean | If the vehicle is located at the active driver profile’s saved home location. |
| `LocatedAtWork` | boolean | If the vehicle is located at the active driver profile’s saved work location. |
| `Location` | location | The latitude and longitude of the vehicle. Beginning with firmware version 2025.2.6, specifying mini |
| `MilesToArrival` | float | The miles until arriving at the navigation destination. If no navigation destination is set, Invalid |
| `MinutesToArrival` | float | The minutes until arriving at the navigation destination. If no navigation destination is set, Inval |
| `OriginLocation` | location | The coordinates of the current navigation route's origin. |
| `RouteLastUpdated` | timestamp | This field is broken and does not return data. |
| `RouteLine` | string | A base64 encoded polyline of the active navigation route. To extract coordinates, decode the base64  |

## Media

| Field | Type | Description |
|-------|------|-------------|
| `MediaAudioVolume` | float | The volume of in-cabin audio measured from 0-10.333. |
| `MediaAudioVolumeIncrement` | float | The size of volume increments or decrements. |
| `MediaAudioVolumeMax` | float | The maximum volume available to be selected. |
| `MediaNowPlayingAlbum` | string | The album of the current track. |
| `MediaNowPlayingArtist` | string | The artist of the current track. |
| `MediaNowPlayingDuration` | integer | The length of the current track measured in milliseconds. For radio stations which do not have a dur |
| `MediaNowPlayingElapsed` | integer | The playback position in the current track, measured in milliseconds. The value returned while liste |
| `MediaNowPlayingStation` | string | The station playing media. |
| `MediaNowPlayingTitle` | string | The title of the current track. |
| `MediaPlaybackSource` | string | The source actively being used for playing media. |
| `MediaPlaybackStatus` | enum | The state of media playback. |

## Powertrain

| Field | Type | Description |
|-------|------|-------------|
| `DiAxleSpeedF` | float | Front drive inverter motor speed normalized at axle level. |
| `DiAxleSpeedR` | float | Rear drive inverter motor speed normalized at axle level. |
| `DiAxleSpeedREL` | float | Rear Left drive inverter motor speed normalized at axle level. |
| `DiAxleSpeedRER` | float | Rear Right drive inverter motor speed normalized at axle level. |
| `DiHeatsinkTF` | float | Front drive inverter heatsink temperature. |
| `DiHeatsinkTR` | float | Rear drive inverter heatsink temperature. |
| `DiHeatsinkTREL` | float | Rear left drive inverter heatsink temperature. |
| `DiHeatsinkTRER` | float | Rear right drive inverter heatsink temperature. |
| `DiInverterTF` | float | Front drive inverter measured outlet temperature. |
| `DiInverterTR` | float | Rear drive inverter measured outlet temperature. |
| `DiInverterTREL` | float | Rear left drive inverter measured outlet temperature. |
| `DiInverterTRER` | float | Rear right drive inverter measured outlet temperature. |
| `DiMotorCurrentF` | float | Front drive inverter motor current. |
| `DiMotorCurrentR` | float | Rear drive inverter motor current. |
| `DiMotorCurrentREL` | float | Rear Left drive inverter motor current. |
| `DiMotorCurrentRER` | float | Rear Right drive inverter motor current. |
| `DiSlaveTorqueCmd` | float | Torque command to secondary drive unit. |
| `DiStateF` | enum | Front drive inverter state. |
| `DiStateR` | enum | Rear drive inverter state. |
| `DiStateREL` | enum | Rear Left drive inverter state. |
| `DiStateRER` | enum | Rear Right drive inverter state. |
| `DiStatorTempF` | float | Front Drive Unit stator temperature. |
| `DiStatorTempR` | float | Rear Drive Unit stator temperature. |
| `DiStatorTempREL` | float | Rear Left Drive Unit stator temperature. |
| `DiStatorTempRER` | float | Rear Right Drive Unit stator temperature. |
| `DiTorqueActualF` | float | Actual torque the front drive unit is controlling to referred to the axle/wheel. |
| `DiTorqueActualR` | float | Actual torque the rear drive unit is controlling to referred to the axle/wheel. |
| `DiTorqueActualREL` | float | Actual torque the rear left drive unit is controlling to referred to the axle/wheel. |
| `DiTorqueActualRER` | float | Actual torque the rear right drive unit is controlling to referred to the axle/wheel. |
| `DiTorquemotor` | float | Torque commanded to the drive unit, referred to the axle/wheel. |
| `DiVBatF` | float | Front drive inverter measured battery voltage. |
| `DiVBatR` | float | Rear drive inverter measured battery voltage. |
| `DiVBatREL` | float | Rear left drive inverter measured battery voltage. |
| `DiVBatRER` | float | Rear right drive inverter measured battery voltage. |
| `Hvil` | enum | The state of the high voltage interlock. |

## Safety

| Field | Type | Description |
|-------|------|-------------|
| `AutomaticBlindSpotCamera` | boolean | Indicates whether the blind spot camera is enabled. |
| `AutomaticEmergencyBrakingOff` | boolean | Indicates whether automatic emergency braking is disabled. |
| `BlindSpotCollisionWarningChime` | boolean | If the blindspot collision warning chime is enabled. |
| `CruiseFollowDistance` | enum | The following distance selected in vehicle controls. |
| `DriverSeatBelt` | enum | Indication that the driver has unbuckled their seat belt. |
| `EmergencyLaneDepartureAvoidance` | boolean | If emergence lane keep assist is enabled. |
| `ForwardCollisionWarning` | enum | The forward collision sensitivity selected in vehicle settings. |
| `LaneDepartureAvoidance` | enum | The lane assist level selected in vehicle settings. |
| `Locked` | boolean | If the vehicle is locked. |
| `MilesSinceReset` | float | The total number of miles driven since the Self-Driving statistics were reset. A reset may occur for |
| `PassengerSeatBelt` | enum | This field improperly reports if the 2nd row center seat belt is buckled. |
| `PinToDriveEnabled` | boolean | If pin to drive mode is enabled. Pin to drive requires entering a pin before shifting the vehicle ou |
| `SelfDrivingMilesSinceReset` | float | The total number of miles driven using Full Self-Driving since the Self-Driving statistics were rese |
| `SpeedLimitWarning` | enum | The speed assist level selected in vehicle settings. |

## Service

| Field | Type | Description |
|-------|------|-------------|
| `IsolationResistance` | float | Resistance between HV bus and chassis. |
| `SemitruckTpmsPressureRe1L0` | float | The last measured tire pressure of the Semi's middle axle left tire(s) in bar. L0 and L1 report meas |
| `SemitruckTpmsPressureRe1L1` | float | The last measured tire pressure of the Semi's middle axle left tire(s) in bar. L0 and L1 report meas |
| `SemitruckTpmsPressureRe1R0` | float | The last measured tire pressure of the Semi's middle axle right tire(s) in bar. R0 and R1 report mea |
| `SemitruckTpmsPressureRe1R1` | float | The last measured tire pressure of the Semi's middle axle right tire(s) in bar. R0 and R1 report mea |
| `SemitruckTpmsPressureRe2L0` | float | The last measured tire pressure of the Semi's rear axle left tire(s) in bar. L0 and L1 report measur |
| `SemitruckTpmsPressureRe2L1` | float | The last measured tire pressure of the Semi's rear axle left tire(s) in bar. L0 and L1 report measur |
| `SemitruckTpmsPressureRe2R0` | float | The last measured tire pressure of the Semi's rear axle right tire(s) in bar. R0 and R1 report measu |
| `SemitruckTpmsPressureRe2R1` | float | The last measured tire pressure of the Semi's rear axle right tire(s) in bar. R0 and R1 report measu |
| `TpmsHardWarnings` | enum | Indicates a tire's pressure needs to be inspected and is severely out of nominal range. |
| `TpmsLastSeenPressureTimeFl` | timestamp | The time the front left tire's pressure was last measured. Timestamp fields report incorrectly. Trea |
| `TpmsLastSeenPressureTimeFr` | timestamp | The time the front right tire's pressure was last measured. Timestamp fields report incorrectly. Tre |
| `TpmsLastSeenPressureTimeRl` | timestamp | The time the rear left tire's pressure was last measured. Timestamp fields report incorrectly. Treat |
| `TpmsLastSeenPressureTimeRr` | timestamp | The time the rear right tire's pressure was last measured. Timestamp fields report incorrectly. Trea |
| `TpmsPressureFl` | float | The last measured tire pressure of the front left tire in atmospheres. |
| `TpmsPressureFr` | float | The last measured tire pressure of the front right tire in atmospheres. |
| `TpmsPressureRl` | float | The last measured tire pressure of the rear left tire in atmospheres. |
| `TpmsPressureRr` | float | The last measured tire pressure of the rear right tire in atmospheres. |
| `TpmsSoftWarnings` | enum | Indicates a tire's pressure needs to be inspected and is slightly out of nominal range. |

## User Preference

| Field | Type | Description |
|-------|------|-------------|
| `Setting24HourTime` | boolean | If 24 hour time is preferred for displaying time. |
| `SettingChargeUnit` | enum | The preferred unit for displaying charge range. |
| `SettingDistanceUnit` | enum | The units the vehicle uses when displaying distance. |
| `SettingTemperatureUnit` | enum | The preferred unit for displaying temperature data. |
| `SettingTirePressureUnit` | enum | The preferred unit for displaying pressure data. |

## Vehicle Configuration

| Field | Type | Description |
|-------|------|-------------|
| `CarType` | enum | The model of the vehicle. |
| `EfficiencyPackage` | string | The efficiency package of the vehicle. This is returned as a string since possible values vary by ve |
| `EuropeVehicle` | boolean | If this vehicle is classified as a Europe vehicle. |
| `ExteriorColor` | string | The exterior color of the vehicle. |
| `OffroadLightbarPresent` | boolean | Report whether the offroad light bar is detected. |
| `RearSeatHeaters` | string | The rear seat heater package installed on the vehicle. |
| `RemoteStartEnabled` | boolean | If the vehicle is being driven without a physical key. |
| `RightHandDrive` | boolean | If the vehicle is a right hand drive vehicle. |
| `RoofColor` | string | The color of the roof. |
| `SunroofInstalled` | enum | The installation state of a sunroof. |
| `Trim` | string | The trim of the vehicle. |
| `VehicleName` | string | The nickname of the vehicle. |
| `Version` | string | The current firmware version of the vehicle. In firmware versions earlier than 2024.44, this field r |
| `WheelType` | string | The type of wheel installed on the vehicle. |

## Vehicle State

| Field | Type | Description |
|-------|------|-------------|
| `CenterDisplay` | enum | The state of the center display. |
| `CurrentLimitMph` | float | The maximum speed the vehicle is allowed to travel. |
| `DoorState` | string | The doors which are currently open. This field has passenger front and driver rear doors swapped in  |
| `DriverSeatOccupied` | boolean | Driver presence, determined by combination of sources depending on platform. |
| `FdWindow` | enum | The state of the front driver window. |
| `FpWindow` | enum | The state of the front passenger window. |
| `GuestModeEnabled` | boolean | If guest mode is enabled. |
| `GuestModeMobileAccessState` | enum | The state of guest mode. |
| `HomelinkDeviceCount` | integer | The number of nearby homelink devices. |
| `HomelinkNearby` | boolean | If a homelink device is nearby. |
| `LightsHazardsActive` | boolean | If the vehicle's hazard lights are activated. |
| `LightsHighBeams` | boolean | If the vehicle's high beams are activated. |
| `LightsTurnSignal` | enum | The state of turn signals. Left, right, both, none. |
| `Odometer` | float | The number of miles the vehicle has driven. Beginning with firmware version 2025.2.6, the minimum de |
| `PairedPhoneKeyAndKeyFobQty` | integer | The number of phone keys and key fobs paired to the vehicle. |
| `RdWindow` | enum | The state of the rear driver window. |
| `RpWindow` | enum | The state of the rear passenger window. |
| `SemitruckPassengerSeatFoldPosition` | enum | Status of the Semi passenger seat position. |
| `SemitruckTractorParkBrakeStatus` | enum | The state of the Semi's tractor park brake. |
| `SemitruckTrailerParkBrakeStatus` | enum | The state of the Semi's trailer park brake. |
| `SentryMode` | enum | The current state of sentry mode. |
| `ServiceMode` | boolean | If service mode is enabled. |
| `SoftwareUpdateDownloadPercentComplete` | integer | The percent of the software update that has been downloaded. Note: during the download of one softwa |
| `SoftwareUpdateExpectedDurationMinutes` | integer | The number of minutes a software update is estimated to take. |
| `SoftwareUpdateInstallationPercentComplete` | integer | The percent a software update has finished installing. Vehicles will not remain connected to Fleet T |
| `SoftwareUpdateScheduledStartTime` | integer | The time a software update is scheduled to begin installing. Timestamp fields report incorrectly. Tr |
| `SoftwareUpdateVersion` | string | The version of an available software update. |
| `SpeedLimitMode` | enum | If speed limit mode is enabled. |
| `TonneauOpenPercent` | float | The percent the Cybertruck's tonneau cover is open. |
| `TonneauPosition` | enum | The state of the Cybertruck's tonneau. |
| `TonneauTentMode` | enum | State of the Cybertruck's tonneau in relationship to tent mode. |
| `ValetModeEnabled` | boolean | If valet mode is enabled. |

