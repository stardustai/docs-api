::: result

```json [response data:schema]
{
  "status": {
    "type": "integer",
    "description": "1 represents BUILDING, 2 represents READY, -1 represents ERROR",
    "required": false
  },
  "datasetId": {
    "type": "string",
    "description": "Dataset id passed in",
    "required": false
  },
  "mappingList": {
    "type": "object[]",
    "description": "Mapping list between data id and scene id",
    "required": false,
    "properties": {
      "dataId": {
        "type": "string",
        "description": "Data Entry Id in our platform"
      },
      "sceneId": {
        "type": "string",
        "description": "Data Entry Id from your file"
      }
    }
  }
}
```

```json [examples]
{
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "status": 2,
      "datasetId": "1",
      "mappingList": [
        {
          "dataId": "111",
          "sceneId": "111111"
        },
        {
          "dataId": "111",
          "sceneId": "111112"
        }
      ]
    },
    "date": "2024-05-17 16:04:53",
    "requestId": "71c3ddd6171593314607810011afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "",
    "message": "Illegal Parameter",
    "requestId": "",
    "success": false
  }
}
```

:::
