---
title: 'Send Tasks'
description: 'This page will help you get started with send annotation tasks to a project. It should be noted that within a project, only one task can be created for the same data.'
api:
  method: POST
  url: /task/send
---

::: request

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "Project id which returned by [Create Project](/projects/create-project)"
  },
  "resourceUrl": {
    "type": "string",
    "description": "Open url of the jsonline file with objects which are defined in Data Structure page, such as http://your-oss.your-site.com/image-sequence-1.jsonl"
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
      "importStatus": 1,
      "batchId": "1948529430730380288"
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "message": "Illegal Parameter",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
