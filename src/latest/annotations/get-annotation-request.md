---
title: '[WIP] Get Annotation Request'
description: 'Guidelines for retrieving an annotation request on Rosetta.'
api:
  method: GET
  url: /annotation-request
---

> [!WARNING]
> The fields 'successSchedule' and 'errorSchedule' are not included in the response of the current version.

::: request

```json [query]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 160 bytes.",
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
      "status": "FINISHED",
      "successTaskMap": {
        "466917967054114816": "550e8400-e29b-41d4-a716-446655440000"
      },
      "errorSceneIdMap": {
        "550e8400-e29b-41d4-a716-446655440000": "Data type mismatch",
        "f47ac10b-58cc-4372-a567-0e02b2c3d479": "Scene id already exists"
      },
      "successSchedule": 33.33,
      "errorSchedule": 66.67
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

| Value         | Description                              |
| ------------- | ---------------------------------------- |
| ID_NOT_EXISTS | Annotation request does not exist        |
| PROCESSING    | Annotation task is in progress           |
| FINISHED      | Annotation task has been completed       |
| FAILED        | An error occurred in the annotation task |
