---
title: 'Create Workflow'
api:
  method: POST
  url: /annotation/workflow/create
---

::: params

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "project id"
  },
  "workflow": {
    "type": "json object",
    "description": "workflow"
  }
}
```

:::

::: results

```json [responses]
{
  "200": {
    "code": 200,
    "message": "Succeed",
    "data": {
      "workflowId": 18000
    },
    "date": "2024-05-17 17:22:21",
    "requestId": "c597b2ac171593779390810011afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "",
    "message": "Invalid Parameter",
    "requestId": "",
    "success": false
  }
}
```

:::
