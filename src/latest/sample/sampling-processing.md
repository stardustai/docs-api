---
title: 'Sampling package processing'
description: 'We will provide a POST API for sampling package processing.'
api:
  method: POST
  url: /sampling/process
---

::: request

```json [query]
{
  "samplingPackageId": {
    "type": "number",
    "description": "sampling package id",
    "default": "5888"
  },
  "poolName": {
    "type": "string",
    "description": "Rosetta Pool Name",
    "default": "a3f8b6e4-9c1d-4d8a-93b2-7f7e8f3a1d5e-SamplingPool"
  },
  "pass": {
    "type": "number",
    "description": "Pass processing method",
    "default": "1",
    "enum": {
      "pass": "1",
      "dismiss": "3"
    }
  },
  "noPass": {
    "type": "number",
    "description": "Unqualified task handling",
    "default": "2",
    "enum": {
      "reject": "2",
      "dismiss": "3"
    }
  },
  "noPassProcessType": {
    "type": "number",
    "description": "Unqualified handling method",
    "default": "1",
    "enum": {
      "refund to source operator": "1",
      "refund to the last operator": "2"
    }
  },
  "noSampling": {
    "type": "number",
    "description": "Processing method of non-sampling",
    "default": "1",
    "enum": {
      "pass with the package": "1",
      "rejected with package return": "2",
      "dismiss": "3"
    }
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
    "data": true,
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
