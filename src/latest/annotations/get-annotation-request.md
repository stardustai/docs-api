---
title: 'Get Annotation Request'
description: 'Guidelines for retrieving an annotation request on Rosetta.'
api:
  method: GET
  url: /annotation-request
---

::: request

```json [param]
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
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "successTaskMap": {
        "466917967054114816": "550e8400-e29b-41d4-a716-446655440000",
        "466917967054114817": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "466917967054114818": "6fa459ea-ee8a-3ca4-894e-db77e160355e",
        "466917967054114819": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b",
        "466917967054114820": "3b241101-e2bb-4255-8caf-4136c566a962"
      },
      "errorSceneIdMap": {
        "550e8400-e29b-41d4-a716-446655440000": "Data type mismatch",
        "f47ac10b-58cc-4372-a567-0e02b2c3d479": "Data type mismatch",
        "6fa459ea-ee8a-3ca4-894e-db77e160355e": "Data type mismatch",
        "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b": "Data type mismatch",
        "3b241101-e2bb-4255-8caf-4136c566a962": "Data type mismatch"
      }
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5836": {
    "code": 5836,
    "data": null,
    "message": "Annotation request has not exists.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
