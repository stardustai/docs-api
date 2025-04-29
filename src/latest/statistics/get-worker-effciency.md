---
title: '[WIP] Get Labeler Working Duration and Efficiency'
description: 'We will provide a POST API for calculating labeler working duration and efficiency in a Campaign on a specific day.'
api:
  method: GET
  url: /statistics/effciency
---

::: tip
efficiency = workingDuration /total annotation instance.
:::

::: request

```json [query]
{
  "campaignId": {
    "type": "string",
    "description": "Helix Campaign ID",
    "default": "a3f8b6e4-9c1d-4d8a-93b2-7f7e8f3a1d5e"
  },
  "aliceName": {
    "type": "string",
    "description": "Helix alice Name",
    "default": "1234567890abcdef"
  },
  "statisticsDate": {
    "type": "string",
    "description": "The specific date in format of YYYY-MM-DD, e.g: 2025-03-13 .If the value is empty, the total date is calculated.",
    "default": "2025-03-13",
    "required": false
  }
}
```

:::

::: result

```json[responses]
{
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": {
      "workingDuration": 1800, // in seconds
      "efficiency": 120, // seconds per annotation instance
      "unit": "seconds"
    },
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
  },
  "51008": {
    "code": 51008,
    "data": null,
    "message": "Campaign not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54001": {
    "code": 54001,
    "data": null,
    "message": "aliceName is not valid or does not exist.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54002": {
    "code": 54002,
    "data": null,
    "message": "Invalid date format or date out of range.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
