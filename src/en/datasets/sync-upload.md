---
title: 'Upload Dataset'
description: 'This page will help you get started with uploading a dataset zip file to Rosetta, TODO.'
api:
  method: POST
  url: /dataset/upload/sync
---

::: params

```json [headers]
{
  "Content-Type": { "type": "string", "default": "multipart/form-data" }
}
```

```json [body:form]
{
  "uploadFile": {
    "type": "file",
    "description": "Local zip file path",
    "default": "dataset.zip"
  },
  "filetreeType": {
    "type": "string",
    "description": "Type of the [filetree](/projects/list-project) in zip file, 0 or 1"
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
      "idMapping": [
        {
          "dataId": "123",
          "sceneId": "554321"
        },
        {
          "dataId": "124",
          "sceneId": "554322"
        }
      ]
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "",
    "message": "Illegal Parameter",
    "requestId": "",
    "success": false
  }
}
```

:::
