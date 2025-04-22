---
title: '[WIP] Get Statistics Record'
description: 'Helix calls to get the statistics record by providing an array of annotationRequestId and pagination information, which can be used to workload statistics and query the relevant annotation records..'
api:
  method: GET
  url: /statistics/record
---

::: request

```json [query]
{
  "annotationRequestId": {
    "type": "string[]",
    "description": "Unique identifier for the annotation request, with a maximum length of 255 bytes.",
    "default": ["7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"]
  },
  "offset": {
    "type": "number",
    "description": "The page number for pagination, starting from 1.",
    "default": 1
  },
  "limit": {
    "type": "number",
    "description": "The number of records per page, a positive integer.By default, protect the maximum value of the server is 1000.",
    "default": 10
  }
}
```

:::

### Response Field Descriptions

| Field Name          | Type                              | Description                                                                                                               |
| ------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| id                  | number                            | Unique identifier of the annotation history record.                                                                       |
| status              | number                            | Status of the task. Possible values and their meanings are described in the Status Enum.                                  |
| campaignId          | string                            | Unique identifier for the campaign.                                                                                       |
| taskId              | number                            | ID of the task.                                                                                                           |
| poolName            | String                            | Name of the pool.                                                                                                         |
| poolType            | number                            | Type of the pool.                                                                                                         |
| folderId            | number                            | ID of the team.                                                                                                           |
| aliceName           | string                            | The alice user name.                                                                                                      |
| createdTime         | string (representing a timestamp) | Creation time of the record.                                                                                              |
| actionType          | number                            | Action code.                                                                                                              |
| instanceInfo        | Json                              | The sum of the values of how many instances of each action was modified is the same as that of instance_num               |
| modifyInstanceNum   | number                            | Number of submitted annotation instances. Only this manual modification and the new instance will be in the count range.  |
| modifyAttributesNum | number                            | Number of submitted annotation attributes. Only this manual modification and the new instance will be in the count range. |
| instanceSum         | number                            | Total number of instances at that time.                                                                                   |
| attributesSum       | number                            | Total number of task attributes at that time.                                                                             |

### TaskActionEnum Table

| Value | Description           |
| ----- | --------------------- |
| 0     | Initialization        |
| 1     | Pause                 |
| 2     | Release               |
| 3     | Resume                |
| 4     | SOLVE                 |
| 5     | Distribute            |
| 6     | BACK task             |
| 7     | Submit annotation     |
| 8     | Check                 |
| 9     | Sampling              |
| 10    | Reject                |
| 11    | Suspend               |
| 12    | Recycle               |
| 13    | Send task             |
| 14    | Dissolve              |
| 15    | Invalid               |
| 16    | Manual recycle        |
| 17    | Return from work pool |

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
             "taskId": 2001, // ID of the task, type number
             "poolName": "CO 041401CO2-Completion Pool", // ID of the pool, type number
             "poolType": 1, // Type of the pool, type number
             "folderId": 4001, // ID of the team, type number
             "creatorId": 6001, // ID of the creator of the record, type number
             "createdTime": "2025-04-01 10:00:00", // Creation time of the record, type string representing a timestamp
             "actionType": 0, // Action code, type number
             "instanceInfo": {
                "select-[e000f]": 44,
                "0e767bcb-7480-4e85-bbe8-439fe7871104": 11
             },
             "modifyInstanceNum": 10, // （Include attributes）, type number
             "modifyAttributesNum": 5, // Number of first-level task attributes, type number
             "instanceSum": 20, // Total number of instances in the current version（Include attributes）, type number
             "attributesSum": 10, // Total number of task attributes at that time, type number
             "frameCount": 1 // Number of frames of the task, type number
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
