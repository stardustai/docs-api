---
title: '[WIP] Get system status'
description: 'We will provide a GET API for get system status.'
api:
  method: GET
  url: /system/getStatus
---

::: request

:::

### Response Field Descriptions

| Field Name | Type  | Description                                   |
| ---------- | ----- | --------------------------------------------- |
| data       | array | The current incident situation of the system. |

::: result

```json [responses]
{
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": ["All systems are operational"],
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
