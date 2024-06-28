---
title: "创建项目"
slug: "create-project"
description: "此页面将帮助您开始在 Rosetta 上创建项目"
hidden: false
createdAt: "Fri May 17 2024 07:45:50 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 17 2024 16:06:51 GMT+0000 (Coordinated Universal Time)"
---

## 标签工具配置

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

<API
	method="GET"
	url="/project/get"
	:body="body"
	:results="results"
/>

<script setup>
const body = {
	name: {
		type: 'string',
		default: 'Lane line project',
		description: 'project name'
	},
	dataType: {
		type: 'integer',
		default: 1,
		description: 'project data type'
	},
	description: {
		type: 'string',
		default: 'project description',
		description: 'description'
	},
	deadline: {
		type: 'string',
		default: '2024-04-22',
		description: 'deadline'
	},
	operators: {
		type: 'object[]',
		description: 'label tool config'
	},
}
const results = {
	200: {
		"code": 200,
		"message": "Success",
		"data": 12, // project id
		"date": "2024-05-16 19:03:34",
		"requestId": "864b70706a7349ea83e177a49800464f",
		"success": true
	},
	400: {
		"code": 400,
		"data": null,
		"date": "",
		"message": "Illegal Parameter",
		"requestId": "",
		"success": false
	}
}
</script>
