---
title: '[WIP] Get Statistics Record'
description: 'Helix calls to get the statistics record by providing an array of annotationRequestId and pagination information, which can be used to workload statistics and query the relevant annotation records..'
api:
  method: GET
  url: /statistics/record
---

::: request

```json [body]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 255 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  "pageNumber": {
    "type": "number",
    "description": "The page number for pagination, starting from 1.",
    "default": 1
  },
  "pageSize": {
    "type": "number",
    "description": "The number of records per page, a positive integer.",
    "default": 10
  }
}
```

:::

### Response Field Descriptions

| Field Name       | Type                              | Description                                                                              |
| ---------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| id               | number                            | Unique identifier of the annotation history record.                                      |
| status           | number                            | Status of the task. Possible values and their meanings are described in the Status Enum. |
| project_id       | number                            | ID of the project the task belongs to.                                                   |
| task_id          | number                            | ID of the task.                                                                          |
| pool_id          | number                            | ID of the pool.                                                                          |
| pool_type        | number                            | Type of the pool.                                                                        |
| team_id          | number                            | ID of the team.                                                                          |
| pool_assignee_id | number                            | ID of the operator assigned to the pool.                                                 |
| creator_id       | number                            | ID of the creator of the record.                                                         |
| created_time     | string (representing a timestamp) | Creation time of the record.                                                             |
| instance_num     | number                            | Number of submitted annotation instances.                                                |
| action_type      | number                            | Action code.                                                                             |
| instance_info    | object (JSON format)              | Instance information.                                                                    |
| instance_sum     | number                            | Total number of instances in the current version.                                        |
| attributes_num   | number                            | Number of first-level task attributes.                                                   |
| attributes_sum   | number                            | Total number of task attributes at that time.                                            |
| frame_count      | number                            | Number of frames of the task.                                                            |
| date             | string (representing a timestamp) | Time when the response is generated.                                                     |
| requestId        | string                            | Unique identifier for the request.                                                       |
| success          | boolean                           | Indicates whether the request is successful.                                             |

### TaskActionEnum Table

| Value | Description           |
| ----- | --------------------- |
| 0     | Initialization        |
| 1     | Pause                 |
| 2     | Release               |
| 3     | Resume                |
| 4     | ERROR                 |
| 5     | Distribute            |
| 6     | COMPLETE              |
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
             "project_id": 1001, // ID of the project the task belongs to, type number
             "task_id": 2001, // ID of the task, type number
             "pool_id": 3001, // ID of the pool, type number
             "pool_type": 1, // Type of the pool, type number
             "team_id": 4001, // ID of the team, type number
             "pool_assignee_id": 5001, // ID of the operator assigned to the pool, type number
             "creator_id": 6001, // ID of the creator of the record, type number
             "created_time": "2025-04-01 10:00:00", // Creation time of the record, type string representing a timestamp
             "action_type": 0, // Action code, type number
             "instance_info": {
                "select-[e000f]": 44,
                "0e767bcb-7480-4e85-bbe8-439fe7871104": 11
             }, // The sum of the values of how many instances of each action was modified is the same as that of instance_num
              "instance_num": 10, // Number of submitted annotation instances（Include attributes）, type number
             "attributes_num": 5, // Number of first-level task attributes, type number
             "instance_sum": 20, // Total number of instances in the current version（Include attributes）, type number
             "attributes_sum": 10, // Total number of task attributes at that time, type number
             "frame_count": 1 // Number of frames of the task, type number
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
    "4005": {
        "code": 4005,
        "data": null,
        "message": "Invalid parameter",
        "date": "2024-05-16 19:03:34",
        "requestId": "864b70706a7349ea83e177a49800464f",
        "success": false
    }
}
```

:::
