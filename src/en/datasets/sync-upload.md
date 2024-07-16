---
title: 'Upload Dataset'
description: This page will help you get started with uploading a local dataset zip file to Rosetta synchronously, the file size should be less than 100MB, and you need to put the files according to [File tree](#file-tree).
api:
  method: POST
  url: /dataset/upload/sync
---

::: params

```json [headers]
{
  "Content-Type": { "type": "string", "default": "multipart/form-data" }
}
```

```json [body:form]
{
  "uploadFile": {
    "type": "file",
    "description": "Local zip file path",
    "default": "dataset.zip"
  },
  "filetreeType": {
    "type": "string",
    "description": "[File tree](#file-tree) in zip file: 0 represents sensor oriented, 1 represents scene oriented."
  }
}
```

:::

::: results

```json [responses]
{
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "datasetId": "1",
      "idMapping": [
        {
          "dataId": "123",
          "sceneId": "554321"
        },
        {
          "dataId": "124",
          "sceneId": "554322"
        }
      ]
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
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

## File tree

::: code-group

```[filetreeType=0]

├── lidar-#name_l0#-left
│   ├── #scene_id_1234#
│   │   ├── #timestamp0#.pcd
│   │   └── #timestamp1#.pcd
│   └── #scene_id_2345#
│       ├── #timestamp0#.pcd
│       └── #timestamp1#.pcd
├── lidar-#name_l1#-right
│   ├── #scene_id_1234#
│   │   ├── #timestamp0#.pcd
│   │   └── #timestamp1#.pcd
│   └── #scene_id_2345#
│       ├── #timestamp0#.pcd
│       └── #timestamp1#.pcd
├── camera-#name_c0#-left
│   ├── #scene_id_1234#
│   │   ├── #timestamp0#.jpg
│   │   └── #timestamp1#.jpg
│   └── #scene_id_2345#
│       ├── #timestamp0#.jpg
│       └── #timestamp1#.jpg
├── camera-#name_c1#-right
│   ├── #scene_id_1234#
│   │   ├── #timestamp0#.jpg
│   │   └── #timestamp1#.jpg
│   └── #scene_id_2345#
│       ├── #timestamp0#.jpg
│       └── #timestamp1#.jpg
└── metadata.json

```

````[filetreeType=1]

├── #scene_id_1234#
│   ├── lidar-#name_l0#-left
│   │   ├── #timestamp0#.pcd
│   │   └── #timestamp1#.pcd
│   ├── lidar-#name_l1#-right
│   │   ├── #timestamp0#.pcd
│   │   └── #timestamp1#.pcd
│   ├── camera-#name_c0#-left
│   │   ├── #timestamp0#.jpg
│   │   └── #timestamp1#.jpg
│   └── camera-#name_c1#-right
│       ├── #timestamp0#.jpg
│       └── #timestamp1#.jpg
├── #scene_id_2345#
│   ├── lidar-#name_l0#-left
│   │   ├── #timestamp0#.pcd
│   │   └── #timestamp1#.pcd
│   ├── lidar-#name_l1#-right
│   │   ├── #timestamp0#.pcd
│   │   └── #timestamp1#.pcd
│   ├── camera-#name_c0#-left
│   │   ├── #timestamp0#.jpg
│   │   └── #timestamp1#.jpg
│   └── camera-#name_c1#-right
│       ├── #timestamp0#.jpg
│       └── #timestamp1#.jpg
└── metadata.json

:::

::: results
``` json [metadata SAMPLES]
{

}
````

:::
