---
title: 'Create RS Folder'
description: 'Helix could use Helix ProjectId in OpenAPI, use Helix ProjectName in the website. RS will Align RS FolderId and FolderName to Helix ProjectId and ProjectName.'
api:
  method: POST
  url: /folder/create
---

::: request

```json [body]
{
  "helixProjectId": {
    "type": "string",
    "description": "Helix Project Id. The maximum length limit is 100 bytes.",
    "required": false
  },
  "name": {
    "type": "string",
    "description": "Helix Project Name. The maximum length limit is 100 bytes."
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
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5839": {
    "code": 5839,
    "data": null,
    "message": "Helix Project Id already exists",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
