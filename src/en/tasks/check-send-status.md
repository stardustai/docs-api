---
title: 'Check Send Status'
api:
  method: POST
  url: /task/send/status
---

::: request

```json [body]
{
  "batchId": {
    "type": "string",
    "description": "The batch ID represents a batch of tasks, which is returned by API Send Tasks."
  }
}
```

:::

::: result

```json [response data:schema]
{}
```

```json [examples]
{
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "batchId": "1948529430730380288",
      "jsonlName": "stardust.jsonl",
      "taskCount": 4,
      "importFailCount": 4,
      "status": 3,
      "errors": [
        {
          "uniqueIdentifier": "0b5e4672-452a-45ca-9779-1dc6e277150d",
          "jsonLine": "{\"attachmentType\": \"IMAGE_SEQUENCE\",\"attachment\": ",
          "error": "Duplicate UniqueIdentifier ID：0b5e4672-452a-45ca-9779-1dc6e277150b"
        },
        {
          "uniqueIdentifier": "0b5e4672-452a-45ca-9779-1dc6e277150d",
          "jsonLine": "{\"attachmentType\": \"IMAGE_SEQUENCE\",\"attachment\": ",
          "error": "Duplicate UniqueIdentifier ID：0b5e4672-452a-45ca-9779-1dc6e277150c"
        },
        {
          "uniqueIdentifier": "0b5e4672-452a-45ca-9779-1dc6e277150d",
          "jsonLine": "{\"attachmentType\": \"IMAGE_SEQUENCE\",\"attachment\": ",
          "error": "Duplicate UniqueIdentifier ID：0b5e4672-452a-45ca-9779-1dc6e277150d"
        },
        {
          "uniqueIdentifier": "0b5e4672-452a-45ca-9779-1dc6e277150d",
          "jsonLine": "{\"attachmentType\": \"IMAGE_SEQUENCE\",\"attachment\": ",
          "error": "Duplicate UniqueIdentifier ID：0b5e4672-452a-45ca-9779-1dc6e277150d"
        }
      ]
    },
    "date": "2024-05-20 18:43:48",
    "requestId": "bd07bc67171620187827410441afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "",
    "message": "Invalid Parameter",
    "requestId": "",
    "success": false
  }
}
```

:::
