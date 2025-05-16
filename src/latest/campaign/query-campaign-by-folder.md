---
title: '[WIP] Query campaign by folderName'
description: 'Query campaign list by folderName.'
api:
  method: GET
  url: /campaign/queryByFolderName
---

::: request

```json [query]
{
  "folderName": {
    "type": "string",
    "description": "folder name",
    "default": "helix-folder-001"
  }
}
```

:::

::: result

```json [responses]
{
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": [
      {
        "campaignId": "stardust helix test",
        "campaignName": "stardust helix test",
        "workflowType": "Manual Template",
        "taxonomyVersionName": "test taxonomyVersionName",
        "folderName": "Stardust",
        "campaignType": "POC"
      }
    ],
    "date": "2025-04-15 11:42:54",
    "requestId": "449d7b0df77d44e7bb54038becc72c45",
    "success": true
  },
  "5000": {
    "code": 5000,
    "data": null,
    "message": "Service hiccuped, please try again later.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "54007": {
    "code": 54007,
    "data": null,
    "message": "folderName is not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "4005": {
    "code": 4005,
    "data": null,
    "message": "Invalid parameter.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
