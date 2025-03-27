---
title: '[WIP]Create Workflow Template'
description: 'Helix calls to get a custom workflow by template name, which can be used when creating a Campaign '
api:
  method: GET
  url: /workflow-template
---

::: request

```json [query]
{
  "templateName": {
    "type": "string",
    "description": "Unique identifier for the template name, with a maximum length of 160 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
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
    "data": "{"edges":[ { "from": "Disribution Pool", "to": "Annotation Pool" },{ "from": "Annotation Pool", "to": "Review Pool" } ,{ "from": "Review Pool", "to": "Sampling Pool" },{ "from": "Sampling Pool", "to": "Completion Pool" }],
"nodes":[ { "name": "Disribution Pool", "type": "DISTRIBUTION" }, { "name": "Annotation Pool", "type": "ANNOTATION" } , { "name": "Review Pool", "type": "CHECK" },{ "name": "Sampling Pool", "type": "SAMPLING" },{ "name": "Sampling Pool", "type": "SAMPLING" },{ "name": "Completion Pool", "type": "COMPLETE" } ]}",
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
  "4005": {
    "code": 4005,
    "data": null,
    "message": "Invalid parameter",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }

```

:::
