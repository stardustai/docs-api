---
title: '[WIP] Get past incidents'
description: 'We will provide a GET API to get incident fix records of last month.'
api:
  method: GET
  url: /incident/getPastIncidents
---

::: request

:::

### Response Field Descriptions

| Field Name      | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| id              | number | Unique identifier of the incident fix record. |
| incidentFixDesc | string | Incident Description                          |
| reportedTime    | number | Incident reported time (timestamp).           |
| fixedTime       | number | Incident fixed time (timestamp).              |
| incidentLevel   | string | Incident impact level (High/Medium).          |
| dataIntegrity   | string | Categories of Data Export Issues.             |
| downtime        | number | Downtime caused by incident.                  |

::: result

```json [responses]
{
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": [
      {
        "id": 1,
        "incidentFixDesc": "system error",
        "reportedTime": 1744080193000,
        "fixedTime": 1744862027000,
        "incidentLevel": "High",
        "dataIntegrity": "Correctable",
        "downtime": 60
      }
    ],
    "date": "2025-03-13 20:00:00",
    "requestId": "7610aa38c0fc409d98c827a879d9cae5",
    "success": true
  },
  "5000": {
    "code": 5000,
    "data": null,
    "message": "Service hiccuped, please try again later.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
