---
title: 'Get Task'
description: 'We will provide a GET API for get task info.'
api:
  method: POST
  url: /task/get
---

::: request

```json [body]
{
  "campaignId": {
    "type": "string",
    "description": "Helix Campaign ID",
    "default": "a3f8b6e4-9c1d-4d8a-93b2-7f7e8f3a1d5e"
  },
  "annotationRequestId": {
    "type": "string",
    "description": "Helix Annotation Request ID",
    "default": "f29c4d8e-6a3b-42e8-bd3f-8e1a9d6c2b7f"
  },
  "sceneId": {
    "type": "string",
    "description": "Helix Scene ID, RS taskId will align with the sceneId.",
    "default": "d7a8c3f9-4b2e-4e6d-a1b9-3f7c8d5e2a6f"
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
      "viewUrl": "https:/${domain}/rosetta-open/task/1234/234234123133374715904/viewOnly",
      "status": 1
    },
    "date": "2025-03-13 20:00:00",
    "requestId": "7610aa38c0fc409d98c827a879d9cae5",
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
  "53003": {
    "code": 53003,
    "data": null,
    "message": "Annotation request has not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "56001": {
    "code": 56001,
    "data": null,
    "message": "SceneId is not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "51008": {
    "code": 51008,
    "data": null,
    "message": "Campaign not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::

### Status Enum

| Value | Description                                                                 |
| ----- | --------------------------------------------------------------------------- |
| 0     | Task creation failed                                                        |
| 1     | Task creation successful (Task in Rosetta Distribution Pool)                |
| 2     | Waiting for annotation (Task in Rosetta Annotation Pool)                    |
| 3     | Annotation in progress (Task in Rosetta Annotation Pool)                    |
| 4     | Annotation completed (Task in Rosetta Annotation Pool)                      |
| 5     | Waiting for review (Task in Rosetta Review Pool)                            |
| 6     | Review in progress (Task in Rosetta Review Pool)                            |
| 8     | Waiting for QC (Task in Rosetta Sampling Pool)                              |
| 9     | QC in progress (Task in Rosetta Sampling Pool)                              |
| 10    | QC completed (Task in Rosetta Sampling Pool) -> Generate QC report on batch |
| 11    | Labels approved (Move the batch of tasks to Completion Pool)                |
