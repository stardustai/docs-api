---
title: Import Dataset
description: This page will help you get started with importing a dataset from cloud storage asynchronously, you need to put the files according to a specific file tree structure, refer to [File tree](#file-tree).
api:
  method: POST
  url: /dataset/import/async
---

<!-- You can use the cloud storage of the platform, or your own storage which follow the S3 protocol, in second case, you need to pass the relevant authentication parameters, such as AccessKey, SecreteKey, Endpoint, VendorType.
-->

::: request

```json [body]
{
  "resourceUrl": {
    "type": "string",
    "description": "The resource url on cloud storage, start with gs://bucket-name/"
  },
  "fileTreeType": {
    "type": "string",
    "description": "[File tree](#file-tree) in storage: 0 represents sensor oriented."
  },
  "dataType": {
    "type": "integer",
    "description": "Data type: 2 represents 2D, 3 represents 3D."
  },
  "name": {
    "type": "string",
    "description": "Dataset name, the maximum length limit is 60 bytes."
  },
  "externalStorage": {
    "type": "object",
    "hidden": true,
    "required": false,
    "properties": {
      "accessKey": {
        "type": "string",
        "description": ""
      },
      "secreteKey": {
        "type": "string",
        "description": ""
      },
      "endpoint": {
        "type": "string",
        "description": ""
      },
      "vendorType": {
        "type": "string",
        "description": ""
      }
    }
  }
}
```

:::

::: result

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
    "date": "2024-05-16 19:03:34",
    "message": "File tree misalignment, refer to API doc for correction",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::

## File tree

<!--@include: filetree.md-->
