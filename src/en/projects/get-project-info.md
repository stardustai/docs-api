---
title: 'Get Project'
description: 'This page will help you get started with retrieve project information.'
api:
  method: GET
  url: /project/get
---

::: params

```json [query]
{
  "projectId": { "type": "long", "description": "project id" }
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
      "description": "this project description",
      "created_at": "2024-04-22"
    },
    "date": "2024-05-17 16:04:53",
    "requestId": "71c3ddd6171593314607810011afb4",
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
