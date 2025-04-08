---
title: '[WIP] Get Task Schedule'
description: 'Query the proportion of the completed pool according to ar.'
api:
  method: GET
  url: /annotation-request/task/schedule
---

> [!WARNING]
> Currently, the Callback interface is unavailable.

::: request

```json [query]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 255 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
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
    "data": {
      "status": "In Progress",
      "completionPoolSchedule": 33.33
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5000": {
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

### Status Enum

| Value       | Description                         |
| ----------- | ----------------------------------- |
| Completed   | All tasks enter the completion pool |
| In Progress | The task is still under annotation  |
