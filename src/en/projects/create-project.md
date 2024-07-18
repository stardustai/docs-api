---
title: 'Create Project'
description: 'This page will help you get started with creating a project on Rosetta, and set the status to 1 which represents [START](/projects/list-project).'
api:
  method: POST
  url: /project/create
---

::: params

```json [body]
{
  "name": {
    "type": "string",
    "description": "Project name, must be distinct."
  },
  "dataType": {
    "type": "integer",
    "description": "Project data type: 2 represents 2D, 3 represents 3D."
  },
  "description": {
    "type": "string",
    "description": "Project description",
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
    "type": "integer",
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
    "description": "Workflow of the annotation pipeline, you can edit it later on the web platform, refer to [Workflow Samples](#workflow-config). If not set, the platform will give the project a default config.",
    "required": false
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
      "projectId": 12,
      "workflowId": 10
    },
    "date": "2024-05-16 19:03:34",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5801": {
    "code": 5801,
    "data": null,
    "date": "",
    "message": "Project name already exists",
    "requestId": "",
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
  "label": "1",
  "slotSpecification": {
    "type": "box3d"
  },
  "children": [
    {
      "key": "box2d-[d14a6]",
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
      "key": "text-[b02fe]",
      "label": "1",
      "type": "input",
      "inputSpecification": {
        "type": "text"
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

::: code-group

```json [Complex Sample]
{
  "edge": [
    {
      "status": 1,
      "endUuid": "2b7e78f4-da10-4198-b920-ab88884f9577",
      "startUuid": "74495e23-64e4-4246-a67f-f41d4ff2d4ab"
    },
    {
      "status": 1,
      "startUuid": "2b7e78f4-da10-4198-b920-ab88884f9577"
    },
    {
      "status": 1,
      "endUuid": "fc96712a-9706-40cd-9b2c-d55867c589ee",
      "startUuid": "f266e629-5886-41b7-bd48-a46360269ee2"
    },
    {
      "status": 1,
      "endUuid": "64e20822-a0ba-4482-ba10-06c1f425fe44",
      "startUuid": "fc96712a-9706-40cd-9b2c-d55867c589ee"
    }
  ],
  "vertex": [
    {
      "name": "Distribution pool",
      "poolUuid": "74495e23-64e4-4246-a67f-f41d4ff2d4ab",
      "position": {
        "top": 260,
        "left": 210
      },
      "status": 1,
      "runMode": 0,
      "type": 0,
      "workers": []
    },
    {
      "name": "Labeling pool",
      "poolUuid": "2b7e78f4-da10-4198-b920-ab88884f9577",
      "position": {
        "top": 238,
        "left": 523
      },
      "status": 1,
      "taskMaximum": 5,
      "peopleMaximum": 5,
      "taskDeadline": null,
      "rejectDeadline": null,
      "isAutoRecycling": true,
      "disclaimerLimit": 3,
      "autoRecyclingLimit": 5,
      "preAnnotationOwnership": false,
      "isTimeSequence": false,
      "type": 1,
      "workers": [],
      "disableOperationItem": []
    },
    {
      "name": "Inspection pool",
      "poolUuid": "f266e629-5886-41b7-bd48-a46360269ee2",
      "position": {
        "top": 450,
        "left": 204
      },
      "status": 1,
      "taskMaximum": 5,
      "peopleMaximum": 5,
      "taskDeadline": null,
      "rejectDeadline": null,
      "isAutoRecycling": true,
      "disclaimerLimit": 3,
      "autoRecyclingLimit": 5,
      "isTimeSequence": false,
      "reverseType": 2,
      "type": 2,
      "workers": [],
      "disableOperationItem": []
    },
    {
      "name": "Spot check pool",
      "poolUuid": "fc96712a-9706-40cd-9b2c-d55867c589ee",
      "position": {
        "top": 450,
        "left": 430
      },
      "status": 1,
      "taskMaximum": 5,
      "taskDeadline": null,
      "rejectDeadline": null,
      "isAutoRecycling": true,
      "disclaimerLimit": 3,
      "autoRecyclingLimit": 5,
      "isTimeSequence": false,
      "reverseType": 1,
      "type": 3,
      "workers": []
    },
    {
      "name": "Completion pool",
      "poolUuid": "64e20822-a0ba-4482-ba10-06c1f425fe44",
      "position": {
        "top": 440,
        "left": 670
      },
      "status": 1,
      "type": 5,
      "workers": []
    }
  ]
}
```

```json [Default Sample]
{}
```

:::
