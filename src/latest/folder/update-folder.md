---
title: 'Update Folder'
description: 'We will provide a POST API for update the folder status.'
api:
  method: POST
  url: /folder/update
---

::: request

```json [body]
{
  "helixProjectId": {
    "type": "string",
    "description": "Helix Project Id. The maximum length limit is 255 bytes.",
    "default": "helixProjectIdTest"
  },
  "helixStatus": {
    "type": "string",
    "description": "There are two options: active and inactive.",
    "default": "active"
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
  "54004": {
    "code": 54004,
    "data": null,
    "message": "folderId is not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54008": {
    "code": 54008,
    "data": null,
    "message": "Folder status has not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54009": {
    "code": 54009,
    "data": null,
    "message": "Update folder failed.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
