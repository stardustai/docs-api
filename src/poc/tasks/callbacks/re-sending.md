---
title: 'Re-sending a Callback'
api:
  method: POST
  url: /task/{taskId}/callback
---

::: request

```json [path]
{
  "taskId": {
    "type": "string",
    "description": "Task Id"
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
    "data": null,
    "date": "2024-05-17 17:45:50",
    "requestId": "77bdf4cd171593981208210031afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "message": "Illegal Parameter",
    "date": "2024-05-17 17:45:50",
    "requestId": "77bdf4cd171593981208210031afb4",
    "success": false
  }
}
```

:::
