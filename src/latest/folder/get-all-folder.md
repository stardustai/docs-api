---
title: '[WIP] Get All Folder'
description: 'We will provide a GET API for get all the folder Info.'
api:
  method: GET
  url: /folder/getAll
---

::: request

:::

::: result

```json [responses]
{
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": {
      "inactive": [
        {
          "helixProjectId": "folder_test1",
          "name": "folder_test1",
          "helixBucketName": "sample-mb-data11",
          "helixStatus": "inactive"
        }
      ],
      "active": [
        {
          "helixProjectId": "STARDUST_HELIX_PROJECT_ID",
          "name": "Stardust",
          "helixBucketName": "test01",
          "helixStatus": "active"
        }
      ]
    },
    "date": "2025-04-14 17:50:00",
    "requestId": "2f6091736bf846a7ae41bd09c5c7e953",
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
  "53007": {
    "code": 53007,
    "data": null,
    "message": "folder is not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
