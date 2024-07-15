---
title: 'Annotation Request'
description: This page will help you get started with send annotation tasks to a project's workflow.
api:
  method: POST
  url: /annotation/request
---

::: params

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "project id"
  },
  "dataIds": {
    "type": "string[]",
    "description": ""
  }
}
```

:::

::: results

```json [responses]
{
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "tasks": [
        {
          "taskId": "23412341235234234",
          "dataId": "2392"
        },
        {
          "taskId": "9182748910723984",
          "dataId": "9782"
        }
      ],
      "errors": ["98902", "1234"]
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464e",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "",
    "message": "Illegal Parameter",
    "requestId": "",
    "success": false
  }
}
```

:::
