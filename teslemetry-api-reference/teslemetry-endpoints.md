# Teslemetry-Specific Endpoints

Teslemetry-specific functionality beyond Tesla Fleet API.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/config/{vin}` | Get streaming config |
| DELETE | `/api/config/{vin}` | Stop Streaming |
| PATCH | `/api/config/{vin}` | Modify Streaming |
| POST | `/api/config/{vin}` | Modify Streaming |
| GET | `/api/image/{vin}` | Vehicle Image |
| GET | `/api/metadata` | Metadata |
| GET | `/api/ping` | Ping |
| GET | `/api/refresh/{vin}` | Refresh Vehicle Data |
| GET | `/api/test` | Test |
| GET | `/api/vehicle_config/{vin}` | Vehicle hardware configuration |
