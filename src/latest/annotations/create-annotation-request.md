---
title: 'Create Annotation Request'
description: 'Guidelines for creating an annotation request on Rosetta.'
api:
  method: POST
  url: /annotation-request
---

> [!WARNING]
> The 'taxonomyInfo' field is not used in the current version.

::: request

```json [body]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 255 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  "annotationRequestName": {
    "type": "string",
    "description": "Name of the annotation request, must be unique with a maximum length of 255 bytes.",
    "default": "Helix 3D Annotation Request"
  },
  "campaignId": {
    "type": "string",
    "description": "Unique identifier for the associated campaign.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  "sceneIdMap": {
    "type": "Map",
    "description": "Mapping of scene IDs relevant to the annotation request.",
    "default": {
      "550e8400-e29b-41d4-a716-446655440000": "gs://marry-me-scene/test/A.yaml",
      "f47ac10b-58cc-4372-a567-0e02b2c3d479": "gs://marry-me-scene/test/B.json"
    }
  },
  "operatorKeys": {
    "type": "List<string>",
    "description": "The pool requires additional filtered taxonomy key of items.",
    "required": false
  },
  "annotationRequestCallback": {
    "type": "string",
    "description": "Callback URL for receiving updates on annotation request status.",
    "required": false
  },
  "annotationResultCallback": {
    "type": "Map",
    "description": "Mapping of callback URLs for annotation result notifications.",
    "required": false
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
    "data": null,
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
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
  "53001": {
    "code": 53001,
    "data": null,
    "message": "Do not create annotation request repeatedly.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "53004": {
    "code": 53004,
    "data": null,
    "message": "annotationRequestId is already exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "53005": {
    "code": 53005,
    "data": null,
    "message": "annotationRequestName is already exists.",
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
  },
  "52001": {
    "code": 52001,
    "data": null,
    "message": "Create workflow failed.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "52002": {
    "code": 52002,
    "data": null,
    "message": "Workflow pool is empty.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
