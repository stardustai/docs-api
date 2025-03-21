---
title: '[WIP] Get Task'
description: 'We will provide a GET API for get task info.'
api:
  method: POST
  url: /task/get
---

::: request

```json [body]
{
  "campaignId": {
    "type": "string",
    "description": "Helix Campaign ID, with a maximum length of 160 bytes.",
    "default": "campaignIdTest"
  },
  "annotationRequestId": {
    "type": "string",
    "description": "Helix Annotation Request ID, with a maximum length of 160 bytes.",
    "default": "annotationRequestIdTest"
  },
  "sceneId": {
    "type": "string",
    "description": "Helix Scene ID, RS taskId will align with the sceneId.",
    "default": "sceneIdTest"
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
    "data": {
      "viewUrl": "https://xxx/task/1234/234234123133374715904/viewOnly",
      "status": "helixProjectName"
    },
    "date": "2025-03-13 20:00:00",
    "requestId": "7610aa38c0fc409d98c827a879d9cae5",
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
      "code": 53003,
      "data": null,
      "message": "Annotation request has not exists.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    },
    {
      "code": 56001,
      "data": null,
      "message": "Task not found.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    }
  ]
}
```

:::
