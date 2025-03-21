---
title: 'Create Workflow'
description: This page will help you get started with creating a specific workflow for annotation request, you can create multiple workflows in one project for different annotation targets, the structure refer to [Workflow config](#workflow-config).
api:
  method: POST
  url: /workflow/create
---

::: request

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "Project id returned by [Create Project](/projects/create-project)"
  },
  "workflow": {
    "type": "object",
    "description": "Workflow of the annotation pipeline, which is composed of a set of pools, you can edit it later on the web platform, refer to [Workflow Samples](#workflow-config). If not set, the platform will give the project a default config.",
    "properties": {
      "vertex": {
        "type": "object[]",
        "description": "Set of pools, the type of the first pool must be 0, means distribution pool, and the type of the last pool must be 5, means completion pool.",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the pool"
          },
          "runMode": {
            "type": "integer",
            "description": "Running mode of the pool: 0 represents manually, 1 represents automatically."
          },
          "type": {
            "type": "integer",
            "description": "Type of the pool, 0 represents distribution, 1 represents labeling, 2 represents inspection, 3 represents spot check, 4 represents algorithm (Now we primarily support 3D pre-labeling, and plan to introduce more flexible configurations in the future), 5 represents completion."
          },
          "workers": {
            "type": "string[]",
            "description": "Name list of accounts assigned to the pool, which is used in labeling pool, inspection pool, spot check pool."
          },
          "algorithmList": {
            "type": "string[]",
            "required": false,
            "hidden": true,
            "description": "When type is 4"
          }
        }
      }
    }
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
      "workflowId": 18000
    },
    "date": "2024-05-17 17:22:21",
    "requestId": "c597b2ac171593779390810011afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "2024-05-17 17:22:21",
    "message": "Invalid Parameter",
    "requestId": "c597b2ac171593779390810011afb4",
    "success": false
  }
}
```

:::

## Workflow config

<!--@include: ../projects/workflow-config.md-->
