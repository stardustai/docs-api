---
title: 'Create Folder'
description: 'This page will help you get started with creating a folder on Rosetta, which is a set of projects, and return the folder id.'
api:
  method: POST
  url: /folder/create
---

::: params

```json [body]
{
  "name": { "type": "string", "description": "Folder name" },
  "externalId": {
    "type": "string",
    "description": "The mapping ID in your platform"
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
      "folderId": 1
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
