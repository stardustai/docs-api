---
title: 'List Task'
description: 'This page will help you get started with list all tasks in a project.'
api:
  method: POST
  url: /project/tasks
---

::: request

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "Project id which returned by [Create Project](/projects/create-project)"
  },
  "status": {
    "type": "integer",
    "hidden": true,
    "description": "status, generally 1"
  },
  "startTime": {
    "type": "long",
    "description": "start time, ms"
  },
  "endTime": {
    "type": "long",
    "description": "end time, ms"
  },
  "offset": {
    "type": "integer",
    "default": 1,
    "description": "Start page number",
    "required": false
  },
  "limit": {
    "type": "integer",
    "default": 10,
    "description": "Number of posts per page",
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
      "count": 5505,
      "data": [
        {
          "id": "358183635683250176",
          "projectId": 3184,
          "poolId": 16555,
          "poolName": "successful-pool-2",
          "poolType": 5,
          "workCount": 0,
          "status": 9,
          "title": null,
          "metaData": {
            "uniqueIdentifier": "119a8f47-78c8-40cc-b039-5d8a5bc47f96"
          },
          "datasetId": 8545436153352348000,
          "datasetName": "20230505_4_0f_day_5301.jsonl",
          "poolAssigneeId": -1,
          "poolAssigneeName": null,
          "affiliationTeamId": 5503,
          "affiliationTeamName": null,
          "createdTime": "2024-05-16 17:33:53",
          "updatedTime": "2024-05-16 19:12:48",
          "rejectCount": null,
          "taskDeadline": null,
          "isTimeSequence": false,
          "deliveryOrderId": null,
          "deliveryPoolId": 16554,
          "isLock": false
        }
      ]
    },
    "date": "2024-05-17 16:15:23",
    "requestId": "140178c0171593377590610051afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "message": "Illegal Parameter",
    "date": "2024-05-17 16:15:23",
    "requestId": "140178c0171593377590610051afb4",
    "success": false
  }
}
```

:::
