---
title: 'Create Annotation Request'
description: 'Guidelines for creating an annotation request on Rosetta.'
api:
  method: POST
  url: /annotation-request
---

::: request

```json [body]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 160 bytes."
  },
  "annotationRequestName": {
    "type": "string",
    "description": "Name of the annotation request, must be unique with a maximum length of 160 bytes."
  },
  "campaignId": {
    "type": "string",
    "description": "Unique identifier for the associated campaign."
  },
  "sceneIdMap": {
    "type": "Map",
    "description": "Mapping of scene IDs relevant to the annotation request."
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
    "code": 200,
    "message": "Success",
    "data": {
      "folderId": 1
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5836": {
    "code": 5836,
    "data": null,
    "message": "Folder name already exists",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
