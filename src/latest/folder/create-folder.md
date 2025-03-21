---
title: '[WIP] Create Folder'
description: 'Helix could use Helix ProjectId in OpenAPI, use Helix ProjectName in the website. RS will Align RS FolderId and FolderName to Helix ProjectId and ProjectName.'
api:
  method: POST
  url: /folder/create
---

::: request

```json [body]
{
  "helixProjectId": {
    "type": "string",
    "description": "Helix Project Id. The maximum length limit is 160 bytes.",
    "default": "helixProjectIdTest"
  },
  "name": {
    "type": "string",
    "description": "Helix Project Name. The maximum length limit is 160 bytes.",
    "default": "helixProjectNameTest"
  },
  "helixBucketName": {
    "type": "string",
    "description": "Helix Bucket Name. The maximum length limit is 160 bytes.",
    "default": "helixBucketNameTest"
  }
}
```

:::

::: result

```json [responses]
{
  "200": {
    "code": 2000,
    "message": "Success",
    "data": null,
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "500": [
    {
      "code": 5000,
      "data": null,
      "message": "Service hiccuped, please try again later.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    },
    {
      "code": 54001,
      "data": null,
      "message": "Helix project already exists.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    },
    {
      "code": 54002,
      "data": null,
      "message": "HelixProjectId already exists.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    },
    {
      "code": 54003,
      "data": null,
      "message": "Name already exists.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    },
    {
      "code": 54005,
      "data": null,
      "message": "Create folder failed.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    },
    {
      "code": 54006,
      "data": null,
      "message": "HelixBucketName already exists.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    }
  ]
}
```

:::
