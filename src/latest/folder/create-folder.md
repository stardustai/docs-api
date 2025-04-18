---
title: 'Create Folder'
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
    "description": "Helix Project Id. The maximum length limit is 255 bytes.",
    "default": "helixProjectIdTest"
  },
  "name": {
    "type": "string",
    "description": "Helix Project Name. The maximum length limit is 255 bytes.",
    "default": "helixProjectNameTest"
  },
  "helixBucketNameList": {
    "type": "array",
    "description": "Helix Bucket Name List. Each item has a max length of 255 bytes. Max 100 items.",
    "items": {
      "type": "string",
      "maxLength": 255
    },
    "maxItems": 100,
    "default": ["helixBucketNameTest1", "helixBucketNameTest2"]
  }
}
```

:::

::: result

```json [responses]
{
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": null,
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5000": {
    "code": 5000,
    "data": null,
    "message": "Service hiccuped, please try again later.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54001": {
    "code": 54001,
    "data": null,
    "message": "folder already exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54002": {
    "code": 54002,
    "data": null,
    "message": "folderId already exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54003": {
    "code": 54003,
    "data": null,
    "message": "Name already exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54005": {
    "code": 54005,
    "data": null,
    "message": "Create folder failed.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54010": {
    "code": 54010,
    "data": null,
    "message": "helixBucketName:[%s] provide bucket name, can not use bucket path.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54011": {
    "code": 54011,
    "data": null,
    "message": "helixBucketName:[%s] max size is 255.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54013": {
    "code": 54013,
    "data": null,
    "message": "helixBucketName:[%s] connection failed. Check whether the bucket exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
