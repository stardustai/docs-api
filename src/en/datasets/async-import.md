---
title: Import Dataset
description: This page will help you get started with importing a dataset from cloud storage asynchronously, you need to put the files according to a specific file tree structure, refer to [File tree](/datasets/sync-upload#file-tree). You can use the cloud storage of the platform, or your own storage which follow the S3 protocol, in second case, you need to pass the relevant authentication parameters, such as AccessKey, SecreteKey, Endpoint, VendorType.
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
    "description": "[File tree](/datasets/sync-upload/#file-tree) in storage: 0 represents sensor oriented, 1 represents scene oriented."
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
    "message": "File tree misalignment, refer to API doc for correction",
    "requestId": "",
    "success": false
  }
}
```

:::
