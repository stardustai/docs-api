---
title: '[WIP]CREATE ANNOTATIONS TOOL'
description: 'Guidelines for create annotations tool info on Rosetta.'
api:
  method: POST
  url: /annotations-tool
---

::: request

```json [body]
{
  "taxonomyVersionName": {
    "type": "string",
    "description": "Unique identifier for the annotation request, with a maximum length of 160 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  " taxonomyDetails": {
    "type": "json []",
    "description": "annotation tool json info.",
    "default": [
      {
        "label": "car",
        "slotSpecification": {
          "minVertices": 20,
          "maxVertices": 50,
          "imageSourceMapping": ["box2d-[1570d]"],
          "mappingScope": "inside",
          "type": "box3d"
        },
        "instanceOption": {
          "minQuantity": 1,
          "maxQuantity": 5
        },
        "key": "box3d-[70692]",
        "type": "slotChildren",
        "children": [
          {
            "label": "color",
            "inputSpecification": {
              "type": "select",
              "items": [
                {
                  "label": "red",
                  "value": "Red"
                },
                {
                  "label": "white",
                  "value": "White"
                },
                {
                  "label": "black",
                  "value": "Black"
                }
              ],
              "default": "Red"
            },
            "key": "select-[94e49]",
            "type": "input"
          },
          {
            "label": "tyre ",
            "slotSpecification": {
              "minWidth": 200,
              "minHeight": 500,
              "type": "box2d"
            },
            "instanceOption": {
              "minQuantity": 1,
              "maxQuantity": 5
            },
            "key": "box2d-[1570d]",
            "type": "slot"
          }
        ]
      }
    ]
  }
}
```

:::

::: result

```json [responses]
{
  "200": {
    "code": 2000,
    "message": "Success",
    "data": "taxonomyVersionName",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "500": {
    "code": 5000,
    "data": null,
    "message": "Service hiccuped, please try again later.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  }
}
```

:::

> [!NOTE]
> The "operator" exists as a configuration item for the Rosetta platform annotation tool and supports the use of combined JSON data as input parameters. The overall design is based on the "type" as the basic classification and supports both single-layer and multi-layer nested annotation table configurations, as well as input box configurations.

## Key Feature Explanation

1. Type System

- The slot type is used for geometric annotation.
- The input type is used for parameter configuration.
- The slotChildren is used for combining complex tasks.

2. Nesting Rules

- SlotChildren can contain sub-items of any type.
- The nesting structure of Input is implemented through items.children.
- All nested levels need to be uniquely identified by key.

3. Data Format

- The value of the single-selection type is a string.
- The value of the multiple-selection type is an array.
- The value of the nested type needs to include the full path (e.g., Fruits/Apple).

| Type         | Description                         | Nesting Capability          | Typical Usage Scenarios    |
| ------------ | ----------------------------------- | --------------------------- | -------------------------- |
| Slot         | Single-layer annotation item        | ❌ Non-nestable             | Basic geometric annotation |
| Input        | Input configuration item            | ✅ Nestable selection items | Parameter setting          |
| SlotChildren | Multi-layer nested annotation group | ✅ Can nest any type        | Composite annotation tasks |

## Slot (Single-layer Annotation Item)

| Attribute              | Type         | Description                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                    | string       | Unique identifier，The format is ${uuid}                                                                                                                                                                                                                                                                                               |
| type                   | string(Enum) | Is fixed as "slot"                                                                                                                                                                                                                                                                                                                     |
| label                  | string       | Display name                                                                                                                                                                                                                                                                                                                           |
| slotSpecification.type | string       | Type enumeration and mapped Helix Annotation Types "polygon3d" mapping "HLX-3D-Polygon","box3d" mapping "HLX-3D-BoundingBox","line3d" mapping "HLX-3D- Polyline", "polygon3d" mapping, "box2d" mapping "HLX-2D-BoundingBox", "line" mapping "HLX-2D-Polyline ", "polygon" mapping "HLX-2D-Polygon" , "point" mapping "HLX-2D-KeyPoint" |

## Input (Input Configuration Item)

| Attribute                  | Type         | Description                                                                                                                                                           |
| -------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                        | string       | Unique identifier, in the format of ${uuid}                                                                                                                           |
| type                       | string(Enum) | Fixed as "input"                                                                                                                                                      |
| label                      | string       | Display name                                                                                                                                                          |
| inputSpecification.type    | string(Enum) | "select":Single choice question, "multiple-select"：Multiple choice question ,"nested-select"：Nested multiple choice,"multiple-nested-select":Nested multiple choice |
| inputSpecification.default | string       | Default value                                                                                                                                                         |
| inputSpecification.items   | InputItem[]  | Option list (required only for select type)                                                                                                                           |

### InputItem

| Attribute | Type        | Description                                  |
| --------- | ----------- | -------------------------------------------- |
| label     | string      | Option display name                          |
| value     | string      | Option value                                 |
| children  | InputItem[] | Sub-options (required only for nested types) |

## SlotChildren (Nested Annotation Group)

| Attribute                            | Type         | Description                                 |
| ------------------------------------ | ------------ | ------------------------------------------- |
| key                                  | string       | Unique identifier, in the format of ${uuid} |
| type                                 | string(Enum) | Fixed as "slotChildren"                     |
| label                                | string       | Display name                                |
| slotSpecification.imageSourceMapping | string[]     | List of keys associated with sub-items      |
| slotSpecification.type               | string(Enum) | All Slot.type are available                 |
| children                             | operator[]   | Set of nested operation items               |

## Visualization Example of the Nesting Structure

```
SlotChildren (Root)
├─ Slot (key: box2d-[73c98])
│  └─ slotSpecification (type: box2d)
├─ Input (key: select-[7a8cb])
│  └─ inputSpecification (type: nested-select)
│     └─ items
│        ├─ label: First-level option
│        └─ children
│           └─ label: Second-level option
└─ SlotChildren (key: group-[12345])
└─ children
├─ Slot (key: point3d-[67890])
└─ Input (key: boolean-[abcd])
```

## Usage Scenario Examples

### 3D Annotation Combination

```json [body]
[
  {
    "label": "car",
    "slotSpecification": {
      "minVertices": 20,
      "maxVertices": 50,
      "imageSourceMapping": ["box2d-[1570d]"],
      "mappingScope": "inside",
      "type": "box3d"
    },
    "instanceOption": {
      "minQuantity": 1,
      "maxQuantity": 5
    },
    "key": "box3d-[70692]",
    "type": "slotChildren",
    "children": [
      {
        "label": "color",
        "inputSpecification": {
          "type": "select",
          "items": [
            {
              "label": "red",
              "value": "Red"
            },
            {
              "label": "white",
              "value": "White"
            },
            {
              "label": "black",
              "value": "Black"
            }
          ],
          "default": "Red"
        },
        "key": "select-[94e49]",
        "type": "input"
      },
      {
        "label": "tyre ",
        "slotSpecification": {
          "minWidth": 200,
          "minHeight": 500,
          "type": "box2d"
        },
        "instanceOption": {
          "minQuantity": 1,
          "maxQuantity": 5
        },
        "key": "box2d-[1570d]",
        "type": "slot"
      }
    ]
  }
]
```

### Multi-level Classification Selection

```json [body]
{
  "type": "input",
  "inputSpecification": {
    "type": "multiple-nested-select",
    "items": [
      {
        "label": "Fruits",
        "children": [
          {
            "label": "Apple",
            "value": "apple"
          },
          {
            "label": "Banana",
            "value": "banana"
          }
        ]
      },
      {
        "label": "Vegetables",
        "children": [
          {
            "label": "Carrot",
            "value": "carrot"
          }
        ]
      }
    ]
  }
}
```
