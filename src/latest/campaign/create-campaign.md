---
title: 'Create Campaign'
description: 'Guidelines for creating a campaign on Rosetta.'
api:
  method: POST
  url: /campaign/create
---

::: request

```json [body]
{
  "campaignId": {
    "type": "string",
    "description": "Unique identifier for the campaign, with a maximum length of 160 bytes."
  },
  "campaignName": {
    "type": "string",
    "description": "Unique name for the campaign, with a maximum length of 160 bytes."
  },
  "workflowType": {
    "type": "string",
    "description": "Type of workflow, must be one of ['Manual', 'PreLabeling']."
  },
  "taxonomyVersion": {
    "type": "Integer",
    "description": "Version number of the Helix taxonomy.",
    "required": false
  },
  "taxonomyInfo": {
    "type": "string",
    "description": "Additional information about the Helix taxonomy.",
    "required": false
  },
  "folderId": {
    "type": "string",
    "description": "Unique identifier for the Helix folder."
  },
  "campaignType": {
    "type": "string",
    "description": "Type of campaign, must be one of ['Test', 'Formal']."
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
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5836": {
    "code": 5836,
    "data": null,
    "message": "Campaign already exists",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
