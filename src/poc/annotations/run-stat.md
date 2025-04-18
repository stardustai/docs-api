---
title: 'Run Statistics'
description: This page will help you get started with running statistics synchronously on a workflow.
api:
  method: POST
  url: /annotation/stat
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
    "description": "Workflow Id which returned by API [Create Workflow](/annotations/create-workflow)"
  }
}
```

:::

::: result

```json [responses]
{
  "200": {
    "code": 200,
    "message": "Succeed",
    "data": {
      "projectId": 2024,
      "workflowId": 18000,
      "efficiency": {
        "workHours": 30.5,
        "objectCount": 1000
      },
      "efforts": [
        {
          "deleted": 30,
          "inspected": 700,
          "added": 730,
          "corrected": 60,
          "vendor": "stardust"
        },
        {
          "deleted": 50,
          "inspected": 300,
          "added": 350,
          "corrected": 100,
          "vendor": "mb"
        }
      ],
      "autolabeling": [
        {
          "objectCount": 9000,
          "algorithmVendor": "stardust"
        },
        {
          "objectCount": 1000,
          "algorithmVendor": "ABC"
        }
      ]
    },
    "date": "2024-05-17 17:22:21",
    "requestId": "c597b2ac171593779390810011afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "requestId": "c597b2ac171593779390810011afb4",
    "message": "Invalid Parameter",
    "date": "2024-05-17 17:22:21",
    "success": false
  }
}
```

:::
