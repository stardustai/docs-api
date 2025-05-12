---
title: 'Get Annotation Frames'
description: 'We will provide a POST API for calculating the number of manual and auto annotation frames in a Campaign.'
api:
  method: GET
  url: /statistics/frames
---

::: request

```json [query]
{
  "campaignId": {
    "type": "string",
    "description": "Helix Campaign ID",
    "default": "a3f8b6e4-9c1d-4d8a-93b2-7f7e8f3a1d5e"
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
    "data": {
      "manualAnnotationFrames": 50,
      "autoAnnotationFrames": 30
    },
    "date": "2025-03-13 20:00:00",
    "requestId": "7610aa38c0fc409d98c827a879d9cae5",
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
  "51008": {
    "code": 51008,
    "data": null,
    "message": "Campaign not exists.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::
