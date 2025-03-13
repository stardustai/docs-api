---
title: 'Create Annotation Request'
description: 'Guidelines for creating an annotation request on Rosetta.'
api:
  method: GET
  url: /annotation-request
---

::: request

```json [param]
{
  "annotationRequestId": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 160 bytes."
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
