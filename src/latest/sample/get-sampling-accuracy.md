---
title: 'Get Sampling Accuracy'
description: 'We will provide a POST API for retrieving the sampling accuracy.'
api:
  method: GET
  url: /sampling/getSamplingAccuracy
---

::: request

```json [query]
{
  "samplingPackageId": {
    "type": "number",
    "description": "sampling package id",
    "default": "5888"
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
      "frameAccuracyRate": 50.2,
      "instanceAccuracyRate": 30
    },
    "date": "2025-03-13 20:00:00",
    "requestId": "7610aa38c0fc409d98c827a879d9cae5",
    "success": true
  },
  "57008": {
    "code": 57008,
    "data": null,
    "message": "Sampling Package not found.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
