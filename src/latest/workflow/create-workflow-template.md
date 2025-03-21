---
title: '[WIP]Create Workflow Template'
description: 'Helix calls to create a custom workflow template and returns the workflow template ID, which can be used when creating a Campaign '
api:
  method: POST
  url: /workflow/template/create
---

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
    "description": "DISTRIBUTION ANNOTATION CHECK SAMPLING ALGORITHM COMPLETE",
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
    "data": {
      "id": "21221"
    },
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
   "50524": {
    "code": 50524,
    "data": null,
    "message": "The workflow template name already exists.",
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
  }
}

```

:::
