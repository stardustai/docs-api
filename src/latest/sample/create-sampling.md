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
    "description": "Interception method value",
    "default": "1"
  },
  "interceptionFrame": {
    "type": "number",
    "description": "Required when your interceptionMode parameter is not SEQUENCELENGTH.",
    "default": "1"
  },
  "sequenceLength": {
    "type": "number",
    "description": "Required when your interceptionMode selects SEQUENCELENGTH.",
    "default": "1"
  },
  "interceptionBoundary": {
    "type": "Array",
    "description": "Required when your interceptionMode type is CUSTOM.",
    "default": "1"
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
  }
}
```

:::
