---
title: '[WIP] Create sampling package'
description: 'We will provide a POST API for create a sampling package.'
api:
  method: POST
  url: /sampling/create
---

::: request

```json [body]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Helix Annotation Request Id",
    "default": "a3f8b6e4-9c1d-4d8a-93b2-7f7e8f3a1d5e"
  },
  "poolName": {
    "type": "string",
    "description": "Rosetta Pool Name",
    "default": "a3f8b6e4-9c1d-4d8a-93b2-7f7e8f3a1d5e-SamplingPool"
  },
  "interceptionMode": {
    "type": "number",
    "description": "Interception method value, Please see the enumeration values defined below. They are not intercepted by default",
    "default": "1",
    "required": false,
    "enum": {
      "1": "random continuity",
      "2": "positive",
      "3": "reversed",
      "4": "system random",
      "5": "custom",
      "6": "sequencelength"
    }
  },
  "interceptionFrame": {
    "type": "number",
    "description": "Required when your interceptionMode parameter is not sequencelength.",
    "default": "1",
    "required": false
  },
  "sequenceLength": {
    "type": "number",
    "description": "Required when your interceptionMode selects sequencelength.",
    "default": "1",
    "required": false
  },
  "interceptionBoundary": {
    "type": "Array",
    "description": "Required when your interceptionMode type is custom.",
    "default": "1",
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
      "samplingPackageId": 5888
    },
    "date": "2025-03-13 20:00:00",
    "requestId": "7610aa38c0fc409d98c827a879d9cae5",
    "success": true
  },
  "53003": {
    "code": 53003,
    "data": null,
    "message": "Annotation request has not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "55005": {
    "code": 55005,
    "data": null,
    "message": "Pool not found",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "57008": {
    "code": 57008,
    "data": null,
    "message": "Sampling Package not found.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "5606": {
    "code": 5606,
    "data": null,
    "message": "The remaining tasks in the current working pool are 0 and cannot be assigned",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
