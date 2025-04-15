---
title: '[WIP] Query Campaign'
description: 'Guidelines for query campaign on Rosetta.'
api:
  method: GET
  url: /campaign/{campaignName}
---

::: request

:::

::: result

```json [responses]
{
  "2000": {
    "code": 2000,
    "message": "请求成功",
    "data": {
      "campaignId": "stardust helix test",
      "campaignName": "stardust helix test",
      "workflowType": "Manual Template",
      "taxonomyVersionName": "test taxonomyVersionName",
      "folderName": "Stardust",
      "campaignType": "POC"
    },
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
  "51006": {
    "code": 51006,
    "data": null,
    "message": "Campaign not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "51009": {
    "code": 51009,
    "data": null,
    "message": "campaignName not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
