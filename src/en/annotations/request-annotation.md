---
title: 'Annotation Request'
description: This page will help you get started with sending annotation tasks to a project's workflow.
api:
  method: POST
  url: /annotation/request
---

::: params

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "Project id returned by API [Create Project](/projects/create-project)"
  },
  "workflowId": {
    "type": "long",
    "description": "Workflow id returned by API [Create Workflow](/datasets/create-workflow) or [Create Project](/projects/create-project), if not set or set to 0, the platform will choose the default workflow which created alongside the project.",
    "required": false
  },
  "dataIds": {
    "type": "string[]",
    "description": "Data ids of scenes which returned by API [Upload Dataset](/datasets/sync-upload) or [Dataset Status](/datasets/get-status)"
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
