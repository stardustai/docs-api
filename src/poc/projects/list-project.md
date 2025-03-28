---
title: 'List Project'
description: 'This page will help you get started with list project.'
api:
  method: POST
  url: /project/list
---

::: request

```json [body]
{
  "status": {
    "type": "integer",
    "description": "0 represents DRAFT, 1 represents START, 2 represents PAUSE, 3 represents DONE"
  },
  "dataType": {
    "type": "integer",
    "description": "Project data type: 2 represents 2D, 3 represents 3D"
  },
  "offset": {
    "type": "integer",
    "default": 1,
    "description": "Start postion of the page",
    "required": false
  },
  "limit": {
    "type": "integer",
    "default": 10,
    "description": "Number of items per page",
    "required": false
  }
}
```

:::

::: result

```json [responses]
{
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "count": 608,
      "data": [
        {
          "id": 3184,
          "createdTime": "2024-05-16 17:29:00",
          "updatedTime": "2024-05-16 19:16:42",
          "deadline": "2026-05-22 23:59:59",
          "status": 1,
          "name": "test",
          "creatorId": 121740,
          "creatorName": "J",
          "operationNames": ["box2d"],
          "type": 1,
          "dataType": 2,
          "projectInfoErrorStatisticsDTO": {
            "accuracyRate": 100,
            "recallRate": 100,
            "samplingCount": 0,
            "missingCount": 0,
            "redundantCount": 0,
            "issueCount": 0,
            "issueTotal": 0,
            "correctTotal": 105,
            "totalNum": 105,
            "totalTaskNum": 5505,
            "doneNum": 20
          },
          "poolNodeTaskDtoList": [
            {
              "id": 16550,
              "status": 1,
              "taskCount": 45,
              "expireTaskCount": 0,
              "name": "label pool",
              "type": 1
            },
            {
              "id": 16551,
              "status": 1,
              "taskCount": 0,
              "expireTaskCount": 0,
              "name": "check pool",
              "type": 2
            },
            {
              "id": 16553,
              "status": 1,
              "taskCount": 0,
              "expireTaskCount": 0,
              "name": "sample pool",
              "type": 3
            }
          ],
          "projectParticipant": {
            "id": 25,
            "name": "test user"
          },
          "projectManagers": []
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
    "message": "Illegal Parameter",
    "date": "2024-05-17 16:04:53",
    "requestId": "71c3ddd6171593314607810011afb4",
    "success": false
  }
}
```

:::
