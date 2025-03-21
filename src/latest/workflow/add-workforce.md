---
title: '[WIP] Add Workforce'
description: 'Guidelines for add workforce on Rosetta.'
api:
  method: POST
  url: /campaign/workflow/addWorkforce
---

> [!WARNING]
> The 'annotationRequestId' field is not used in the current version.

::: request

```json [body]
{
  "campaignId": {
    "type": "string",
    "description": "Unique identifier for the campaign, with a maximum length of 160 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  "poolName": {
    "type": "string",
    "description": "Name of the corresponding pool; The poolName is checked to see if it matches the campaignId or annotationRequestId.",
    "default": "Distribution Pool"
  },
  "aliceNameList": {
    "type": "string[]",
    "description": "The alice user name collection to be added to the pool."
  },
  "annotationRequestId": {
    "type": "string",
    "description": "If not passed, the default is to add labor to campaign workflow.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b",
    "required": false
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
    "data": {
      "failedUserList": ["aliceUser1", "aliceUser2"]
    },
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
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
    "message": "CampaignId not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "53003": {
    "code": 53003,
    "data": null,
    "message": "Annotation request has not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "55003": {
    "code": 55003,
    "data": null,
    "message": "Pools are not the type of work",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "55004": {
    "code": 55004,
    "data": null,
    "message": "The AR pool subtype must match the campaign type",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "55005": {
    "code": 55005,
    "data": null,
    "message": "Pool not found",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
