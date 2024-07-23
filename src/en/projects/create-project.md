---
title: 'Create Project'
description: 'This page will help you get started with creating a project on Rosetta, and set the status to 1 which represents START.'
api:
  method: POST
  url: /project/create
---

::: request

```json [body]
{
  "name": {
    "type": "string",
    "description": "Project name, must be distinct, the maximum length limit is 60 bytes."
  },
  "dataType": {
    "type": "integer",
    "description": "Project data type: 2 represents 2D, 3 represents 3D."
  },
  "description": {
    "type": "string",
    "description": "Project description, the maximum length limit is 200 bytes.",
    "required": false
  },
  "deadline": {
    "type": "string",
    "description": "A date for system notification, such as 2024-06-01."
  },
  "operators": {
    "type": "object[]",
    "description": "Label tool config, refer to [Operators Samples](#labeling-tool-config)."
  },
  "folderId": {
    "type": "long",
    "default": "0",
    "description": "Folder ID which returned by API [Create Folder](/projects/create-folder)",
    "required": false
  },
  "projectManager": {
    "type": "string",
    "default": "'Owner of the AK'",
    "description": "Account name you want to appoint to project manager.",
    "required": false
  },
  "teamNames": {
    "type": "string[]",
    "description": "Name of the teams you want to authorize access to the project, you can edit these later on the web platform.",
    "required": false
  },
  "workflow": {
    "type": "object",
    "description": "Workflow of the annotation pipeline, which is composed of a set of pools, you can edit it later on the web platform, refer to [Workflow Samples](#workflow-config). If not set, the platform will give the project a default config.",
    "required": false,
    "properties": {
      "vertex": {
        "type": "object[]",
        "description": "Set of pools, the type of the first pool must be 0, means distribution pool, and the type of the last pool must be 5, means completion pool.",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the pool, the maximum length limit is 60 bytes."
          },
          "runMode": {
            "type": "integer",
            "description": "Running mode of the pool: 0 represents manually, 1 represents automatically."
          },
          "type": {
            "type": "integer",
            "description": "Type of the pool, 0 represents distribution, 1 represents labeling, 2 represents inspection, 3 represents spot check, 4 represents algorithm, 5 represents completion."
          },
          "workers": {
            "type": "string[]",
            "description": "Name list of accounts assigned to the pool, which is used in labeling pool, inspection pool, spot check pool."
          },
          "algorithmList": {
            "type": "string[]",
            "required": false,
            "hidden": true,
            "description": "When type is 4 "
          }
        }
      }
    }
  }
}
```

:::

::: result

```json [response_data:schema]
{
  "projectId": {
    "type": "long",
    "required": false
  },
  "status": {
    "type": "integer",
    "description": "0 represents DRAFT, 1 represents START, 2 represents PAUSE, 3 represents DONE",
    "required": false
  },
  "workflowId": {
    "type": "long",
    "required": false
  }
}
```

```json [examples]
{
  "200": {
    "code": 200,
    "message": "Success",
    "data": {
      "projectId": 12,
      "status": 1,
      "workflowId": 10
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5801": {
    "code": 5801,
    "data": null,
    "message": "Project name already exists",
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::

## Labeling tool config

::: code-group

```json [nesting instance structure]
{
  "key": "box3d-[1cbd2]",
  "type": "slotChildren",
  "label": "Box3D",
  "slotSpecification": {
    "type": "box3d"
  },
  "children": [
    {
      "key": "box2d-[d14a6]",
      "type": "slot",
      "label": "Box2D",
      "slotSpecification": {
        "type": "box2d",
        "restrictInsideCanvasBoundary": true,
        "topLeftMark": "1",
        "topRightMark": "2",
        "bottomRightMark": "3",
        "bottomLeftMark": "4",
        "sizeCheckSwitch": true
      }
    },
    {
      "key": "select-[c1283]",
      "label": "Class3D",
      "type": "input",
      "inputSpecification": {
        "type": "select",
        "items": [
          {
            "label": "Vehicle",
            "value": "Vehicle"
          },
          {
            "label": "Pedestrian",
            "value": "Pedestrian"
          },
          {
            "label": "Cyclist",
            "value": "Cyclist"
          }
        ],
        "renderConfig": {
          "selectionWidgetType": "Segment"
        },
        "continuousFrameSync": false
      }
    }
  ]
}
```

```json [instance structure]
[
  {
    "key": "box3d-[ff05a]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "box3d"
    }
  },
  {
    "key": "polygon3d-[402e1]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "polygon3d"
    }
  },
  {
    "key": "point3d-[65113]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "point3d"
    }
  },
  {
    "key": "line3d-[3b859]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "line3d"
    }
  },
  {
    "key": "box2d-[02b3b]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "box2d",
      "restrictInsideCanvasBoundary": true,
      "topLeftMark": "1",
      "topRightMark": "2",
      "bottomRightMark": "3",
      "bottomLeftMark": "4",
      "sizeCheckSwitch": true
    }
  },
  {
    "key": "line-[ee28a]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "line",
      "restrictInsideCanvasBoundary": true
    }
  },
  {
    "key": "splines-[9c3bd]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "splines",
      "restrictInsideCanvasBoundary": true
    }
  },
  {
    "key": "point-[939a3]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "point",
      "restrictInsideCanvasBoundary": true
    }
  },
  {
    "key": "cuboid-[5707c]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "cuboid",
      "frontTopLeftMark": "1",
      "frontTopRightMark": "2",
      "frontBottomRightMark": "3",
      "frontBottomLeftMark": "4",
      "backTopLeftMark": "5",
      "backTopRightMark": "6",
      "backBottomRightMark": "7",
      "backBottomLeftMark": "8",
      "sizeCheckSwitch": true
    }
  },
  {
    "key": "polygon-[1dfd5]",
    "type": "slot",
    "label": "1",
    "slotSpecification": {
      "type": "polygon",
      "restrictInsideCanvasBoundary": true,
      "sizeCheckSwitch": true
    }
  }
]
```

```json [attribute structure]
[
  {
    "key": "text-[7aba5]",
    "label": "1",
    "type": "input",
    "inputSpecification": {
      "type": "text"
    }
  },
  {
    "key": "select-[d72e5]",
    "label": "1",
    "type": "input",
    "inputSpecification": {
      "type": "select",
      "items": [
        {
          "label": "Car",
          "value": "car"
        },
        {
          "label": "Truck",
          "value": "truck"
        },
        {
          "label": "Bicycle",
          "value": "bicycle"
        }
      ],
      "renderConfig": {
        "selectionWidgetType": "Dropdown"
      }
    }
  },
  {
    "label": "1",
    "metadata": {},
    "inputSpecification": {
      "type": "multiple-select",
      "renderConfig": {
        "selectionWidgetType": "Dropdown"
      },
      "items": [
        {
          "label": "Car",
          "value": "car"
        },
        {
          "label": "Truck",
          "value": "truck"
        },
        {
          "label": "Bicycle",
          "value": "bicycle"
        }
      ],
      "continuousFrameSync": false
    },
    "inputOption": {},
    "key": "select-[574aa]",
    "type": "input"
  }
]
```

:::

## Workflow config

<!--@include: workflow-config.md-->
