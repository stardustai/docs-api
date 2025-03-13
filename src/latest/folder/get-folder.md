---
title: 'Create Folder'
description: 'We will provide a GET API for get the RS folder Info.'
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
    "message": "请求成功",
    "data": {
      "helixProjectId": "123",
      "name": "helixProjectName"
    },
    "date": "2026-02-06",
    "requestId": "7610aa38c0fc409d98c827a879d9cae5",
    "success": true
  },
  "500": {
    "code": 5000,
    "data": null,
    "message": "Service hiccuped, please try again later.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
