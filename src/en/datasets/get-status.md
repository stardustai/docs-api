---
title: 'Get Status'
description: This page will help you get the status of a dataset.
api:
  method: GET
  url: /dataset/status
---

::: params

```json [query]
{
  "datasetId": {
    "type": "string",
    "description": "Dataset id which returned by the API [Upload Dataset](/datasets/sync-upload) or [Import Dataset](/datasets/async-import)."
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
      "status": 2,
      "readyMapping": [
        {
          "dataId": "111",
          "sceneId": "111111"
        },
        {
          "dataId": "111",
          "sceneId": "111112"
        }
      ]
    },
    "date": "2024-05-17 16:04:53",
    "requestId": "71c3ddd6171593314607810011afb4",
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
