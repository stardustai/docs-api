---
title: '[WIP] Get Statistics Result'
description: 'Helix calls to get the statistics  by providing an array of annotationRequestId and pagination information, which can be used to deliver statistics and query the relevant annotation result.'
api:
  method: GET
  url: /statistics
---

::: request

```json [query]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 255 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  "offset": {
    "type": "number",
    "description": "The page number for pagination, starting from 1.",
    "default": 1
  },
  "limit": {
    "type": "number",
    "description": "The number of records per page, a positive integer.By default, protect the maximum value of the server is 100. ",
    "default": 10
  }
}
```

:::

### Response Field Descriptions

| Field Name   | Type   | Description                                                                              |
| ------------ | ------ | ---------------------------------------------------------------------------------------- |
| id           | number | Unique identifier of the task.                                                           |
| status       | number | Status of the task. Possible values and their meanings are described in the Status Enum. |
| campaignId   | string | Unique identifier for the campaign.                                                      |
| poolId       | number | ID of the pool.                                                                          |
| poolType     | number | Type of the pool.                                                                        |
| instanceInfo | Json   | The number of instances of each operation.                                               |

### TaskStatusEnum Table

| Value | Description            |
| ----- | ---------------------- |
| 1     | Waiting for allocation |
| 2     | Assigned               |
| 3     | At work                |
| 4     | Waiting for submission |
| 5     | Pause                  |
| 6     | Error                  |
| 7     | Suspend                |
| 8     | Submission failed      |
| 9     | Accomplish             |
| 10    | Invalid                |

### PoolTypeEnum Table

| Value | Description       |
| ----- | ----------------- |
| 0     | Distribution Pool |
| 1     | Annotation Pool   |
| 2     | Check Pool        |
| 3     | Sampling Pool     |
| 4     | Algorithm Pool    |
| 5     | Complete Pool     |
| 6     | Common            |

::: result

```json[responses]
{
    "2000": {
        "code": 2000,
        "message": "Success",
        "data": [
            {
             "id": 1, // Unique identifier of the annotation history record, type number
             "status": 1, // Status of the task, type number
             "campaignId": 1001, // ID of the project the task belongs to, type number
             "poolId":3001,//IDofthepool,typenumber
            "poolType":1,//Typeofthepool,typenumber
             "instanceInfo": {
                "select-[e000f]": 44,
                "0e767bcb-7480-4e85-bbe8-439fe7871104": 11
             }
             }
        ],
        "date": "2025-04-08 14:20:00",
        "requestId": "9876543210abcdef9876543210abcdef",
        "success": true
    },
    "5000": {
        "code": 5000,
        "data": null,
        "message": "Service hiccuped, please try  again later.",
        "date": "2025-03-13 20:00:00",
        "requestId": "864b70706a7349ea83e177a49800464f",
        "success": false
    },
 "53003": {
    "code": 53003,
    "data": null,
    "message": "Annotation request has not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
