---
title: 'Create Campaign'
description: 'Guidelines for creating a campaign on Rosetta.'
api:
  method: POST
  url: /campaign/create
---

> [!WARNING]
> The 'taxonomyInfo', 'taxonomyVersion' field is not used in the current version.

::: request

```json [body]
{
  "campaignId": {
    "type": "string",
    "description": "Unique identifier for the campaign, with a maximum length of 255 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  "campaignName": {
    "type": "string",
    "description": "Unique name for the campaign, with a maximum length of 255 bytes.",
    "default": "Helix 3D Campaign"
  },
  "workflowType": {
    "type": "string",
    "description": "Type of workflow, must be one of ['Manual Template', 'Prelabeling Template'] or workflow template name.",
    "default": "Manual"
  },
  "taxonomyVersion": {
    "type": "Integer",
    "description": "Version number of the Helix taxonomy.",
    "required": false
  },
  "taxonomyInfo": {
    "type": "json",
    "description": "Additional information about the Helix taxonomy.",
    "required": false
  },
  "folderName": {
    "type": "string",
    "description": "Unique name for the Helix folder, with a maximum length of 255 bytes",
    "default": "helix-folder-001"
  },
  "campaignType": {
    "type": "string",
    "description": "Type of campaign, must be one of ['POC', 'Formal'].",
    "default": "POC"
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
    "data": null,
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
  "51000": {
    "code": 51000,
    "data": null,
    "message": "field : xxx can't be empty.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "51001": {
    "code": 51001,
    "data": null,
    "message": "Do not create campaigns repeatedly.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "51002": {
    "code": 51002,
    "data": null,
    "message": "Unknown annotation type.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "51003": {
    "code": 51003,
    "data": null,
    "message": "Campaign id is already exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "51004": {
    "code": 51004,
    "data": null,
    "message": "Campaign name is already exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "51005": {
    "code": 51005,
    "data": null,
    "message": "Campaign create has error.",
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
  "51007": {
    "code": 51007,
    "data": null,
    "message": "Campaign workflow type error.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
