---
title: 'Annotation Request'
description: This page will help you get started with sending annotation tasks to a project's workflow.
api:
  method: POST
  url: /annotation/request
---

::: request

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "Project id returned by [Create Project](/projects/create-project)"
  },
  "workflowId": {
    "type": "long",
    "description": "Workflow id returned by API [Create Workflow](/datasets/create-workflow) or [Create Project](/projects/create-project), if not set or set to 0, the platform will choose the default workflow which created alongside the project.",
    "required": false
  },
  "datasetId": {
    "type": "long",
    "description": "Dataset id of scenes which returned by [Upload Dataset](/datasets/sync-upload) or [Import Dataset](/datasets/async-import)"
  },
  "dataIds": {
    "type": "string[]",
    "description": "Data ids of scenes which returned by [Upload Dataset](/datasets/sync-upload) or [Dataset Status](/datasets/get-status)"
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
      "successTaskList": [
        {
          "taskId": "23412341235234234",
          "dataId": "2392"
        },
        {
          "taskId": "9182748910723984",
          "dataId": "9782"
        }
      ],
      "errorDataIdList": ["98902", "1234"]
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464e",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "2024-05-16 19:03:34",
    "message": "Illegal Parameter",
    "requestId": "864b70706a7349ea83e177a49800464e",
    "success": false
  }
}
```

:::
