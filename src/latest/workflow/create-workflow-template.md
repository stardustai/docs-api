---
title: '[WIP]Create Workflow Template'
description: 'Helix calls to create a custom workflow template and returns the workflow template anme, which can be used when creating a Campaign '
api:
  method: POST
  url: /workflow/template
---

### The workflow rule of the workflow template is as follows:

1. The name of the work pool must be unique
2. There is only one allocation pool and it must be at the head node
3. The end of each branch must be the completion pool.And the completion pool cannot be connected after the pool.
4. No isolated nodes
5. The maximum number of nodes in the working pool template is 20
6. A work pool other than the assignment pool can have only one subordinate work pool

> [!WARNING]
> When the node type is 'ALGORITHM', the current version is not supported.

::: request

```json [body]
{
  "nodes": {
    "type": "map[]",
    "description": "workflow pool nodes",
    "default": [{ "name": "disttribution", "type": "DISTRIBUTION" }]
  },
  "edges": {
    "type": "map[]",
    "description": "workflow pool edges.",
    "default": [{ "from": "annotation", "to": "check" }]
  },
  "name": {
    "type": "string",
    "description": "workflow template name.with a maximum length of 160 bytes.for unique check.",
    "default": "template name"
  }
}
```

```json [nodes]
{
  "name": {
    "type": "string",
    "description": "annotation node name. with a maximum length of 160 bytes.",
    "default": "annotation"
  },
  "type": {
    "type": "string",
    "description": "The enumeration is as follows: DISTRIBUTION ANNOTATION CHECK SAMPLING ALGORITHM COMPLETE",
    "default": "DISTRIBUTION"
  }
}
```

```json [edges]
{
  "from": {
    "type": "string",
    "description": "The name of the head node of this edge.",
    "default": "distribution"
  },
  "to": {
    "type": "string",
    "description": "The name of the end node of this edge.",
    "default": "annotation"
  }
}
```

:::

::: result

```json[responses]
{
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": "template name",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
    "5000": {
    "code": 5000,
    "data": null,
    "message": "Service hiccuped, please try  again later.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "50522": {
    "code": 50522,
    "data": null,
    "message": "The pool vertex information is incorrect",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "50523": {
    "code": 50523,
    "data": null,
    "message": "The last pool is not the finish pool.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
   "50525": {
    "code": 50525,
    "data": null,
    "message": "The pool name in the workflow template is the same.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
    "50526": {
    "code": 50526,
    "data": null,
    "message": "There are some pools that have no edges.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
    "50527": {
    "code": 50527,
    "data": null,
    "message": "The annotaion/check/sampling/algorithm  pool can output only one edge.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
   "50528": {
    "code": 50528,
    "data": null,
    "message": "The number of pools exceeds the limit of 20.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
   "50529": {
    "code": 50529,
    "data": null,
    "message": "TemplateName is already exists.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
   "50530": {
    "code": 50530,
    "data": null,
    "message": "The pool type has not exists.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "50531": {
    "code": 50531,
    "data": null,
    "message": "The completion pool cannot be connected to other pools.",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}

```

:::
