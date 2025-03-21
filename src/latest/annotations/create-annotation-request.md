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
    "description": "Unique identifier for the annotation request, with a maximum length of 160 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  "annotationRequestName": {
    "type": "string",
    "description": "Name of the annotation request, must be unique with a maximum length of 160 bytes.",
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
  "taxonomyInfo": {
    "type": "string",
    "description": "Additional information about the Helix taxonomy.",
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
  "200": {
    "code": 2000,
    "message": "Success",
    "data": null,
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "500": {
    "code": 5000,
    "data": null,
    "message": "Service hiccuped, please try again later.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
