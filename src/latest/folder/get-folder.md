---
title: 'Get Folder'
description: 'We will provide a GET API for get the folder Info.'
api:
  method: GET
  url: /folder/{helixProjectId}
---

::: request

:::

::: result

```json [responses]
{
  "200": {
    "code": 2000,
    "message": "Success",
    "data": {
      "helixProjectId": "helixProjectId",
      "name": "helixProjectName",
      "helixBucketName": "helixBucketName"
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
      "code": 54004,
      "data": null,
      "message": "HelixProjectId is not exists.",
      "date": "2025-03-13 20:00:00",
      "requestId": "864b70706a7349ea83e177a49800464f",
      "success": false
    }
  ]
}
```

:::
