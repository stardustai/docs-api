---
title: 'Upload Dataset'
description: This page will help you get started with uploading a local dataset zip file to Rosetta synchronously, the file size should be less than 100MB, and you need to put the files according to [File tree](#file-tree).
api:
  method: POST
  url: /dataset/upload/sync
---

::: request

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
  "fileTreeType": {
    "type": "integer",
    "description": "[File tree](#file-tree) in zip file: 0 represents sensor oriented."
  },
  "dataType": {
    "type": "integer",
    "description": "Data type: 2 represents 2D, 3 represents 3D."
  },
  "name": {
    "type": "string",
    "description": "Dataset name, the maximum length limit is 60 bytes."
  }
}
```

:::

<!--@include: common-response.md-->

## File tree

<!--@include: file-tree.md-->
