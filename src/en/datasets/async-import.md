---
title: Import Dataset
description: ''
api:
  method: POST
  url: /dataset/import/async
---

::: params

```json [body]
{
  "resourceUrl": {
    "type": "string",
    "description": "the resource url on cloud storage, "
  },
  "filetreeType": {
    "type": "string",
    "description": "Type of the [filetree](/projects/list-project) in zip file, 0 or 1"
  },
  "externalStorage": {
    "type": "object",
    "children": {
      "accessKey": {
        "type": "string"
      }
    }
  },
  "isExternalStorage": {
    "type": "int",
    "description": "",
    "default": "0",
    "required": false
  },
  "accessKey": {
    "type": "string",
    "required": false
  },
  "secreteKey": {
    "type": "string",
    "required": false
  },
  "endpoint": {
    "type": "string",
    "required": false
  },
  "secreteKey": {
    "type": "string",
    "required": false
  },
  "vendorType": {
    "type": "string",
    "required": false
  }
}
```

:::

::: results

```json [responses]
{
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "datasetId": "1",
      "status": 1
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5710": {
    "code": 5710,
    "data": null,
    "date": "",
    "message": "File tree misalignment. Refer to API doc for correction.",
    "requestId": "",
    "success": false
  }
}
```

:::
