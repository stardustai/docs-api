---
title: 'Get Status'
description: This page will help you get the status of a dataset.
api:
  method: GET
  url: /dataset/status
---

::: request

```json [query]
{
  "datasetId": {
    "type": "string",
    "description": "Dataset id which returned by [Upload Dataset](/datasets/sync-upload) or [Import Dataset](/datasets/async-import)."
  }
}
```

:::

<!--@include: common-response.md-->
