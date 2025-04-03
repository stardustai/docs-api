---
title: '[WIP]Create Taxonomy'
description: 'Guidelines for create taxonomy info on Rosetta.'
api:
  method: POST
  url: /taxonomy
---

::: request

```json [body]
{
  "taxonomyVersionName": {
    "type": "string",
    "description": "Unique identifier for the taxonomy, with a maximum length of 160 bytes.",
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
  "2000": {
    "code": 2000,
    "message": "Success",
    "data": "taxonomyVersionName",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": true
  },
  "5000": {
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
> The "operator" exists as a configuration item for the Rosetta platform annotation tool and supports the use of
> combined JSON data as input parameters. The overall design is based on the "type" as the basic classification and
> supports both single-layer and multi-layer nested annotation table configurations, as well as input box configurations.

## Key Feature Explanation

1. Operator Type

- "**slot**"：The slot is used for geometric annotation.
- "**input**"：The input is used for parameter configuration.When input has no parent, it describes the task itself. When input
  is in the Children of SlotChildren, it describes the upper slot.
- "**slotChildren**"：slotChildren is a special type of slot that can contain slot , input and even another slotChildren inside it.

2. The nesting structure of Input is implemented through items.children.

![desc](/desc.png)

## Mapping of Annotation types

| Rosetta Annotation types | Helix Annotation Types                                         |
| ------------------------ | -------------------------------------------------------------- |
| box2d                    | HLX-2D-BoundingBox                                             |
| square                   | HLX-2D-BoundingBox.Square                                      |
| ellipse                  | HLX-2D-BoundingBox.Oval                                        |
| triangle                 | HLX-2D-BoundingBox.3point-polygon                              |
| line                     | HLX-2D-Polyline                                                |
| polygon                  | HLX-2D-Polygon                                                 |
| point                    | HLX-2D-KeyPoint                                                |
| box3d                    | HLX-3D-BoundingBox                                             |
| 3D Polygon               | HLX-3D-BoundingBox.Oval/3point-polygon/Square +4D Map Labeling |
| 3D Polyline              | HLX-3D-Polyline +4D Map Labeling                               |
| semantic-segmentation3d  | HLX-3D-Polygon.SemSeg/InstanceSeg                              |
| Single&multiple Choice   | HLX-2D-EventTagging                                            |
| Text Input               | HLX-Text-TextDescription                                       |
| group                    | 4D Map Labeling                                                |

## Slot (Single-layer Annotation Item)

| Attribute                                                                      | Required | Type         | Description                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------ | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                                                                            | true     | string       | Unique identifier，The format is ${uuid}                                                                                                                                                                                      |
| type                                                                           | true     | string(Enum) | Is fixed as "slot"                                                                                                                                                                                                            |
| label                                                                          | true     | string       | Operator name                                                                                                                                                                                                                 |
| slotSpecification.type                                                         | true     | string(Enum) | [rosetta annotation type](#mapping-of-annotation-types)                                                                                                                                                                       |
| slotSpecification.customColor                                                  | false    | string       | Instance color for the annotation(Color notation in hexadecimal)                                                                                                                                                              |
| metadata.hint                                                                  | false    | string       | Hint information for the annotation                                                                                                                                                                                           |
| instanceOption.minMaxQuantity/maxQuantity                                      | false    | number       | (AQC) Min/Max quantity for the annotation                                                                                                                                                                                     |
| slotSpecification.minWidth/minHeight                                           | false    | number       | (AQC)Min size for relevant geometric 2D shapes(eg:2D Box,2D Square,2D Oval,2D Polyline,2D Polygon,2D 3points Polygon)                                                                                                         |
| slotSpecification.<br/>topLeftMark/topRightMark/bottomLeftMark/bottomRightMark | false    | string       | vertex labels for box2D an cuboid                                                                                                                                                                                             |
| slotSpecification.restrictInsideCanvasBoundary                                 | false    | boolean      | Drawing instances is limited to the image area only.If set to true, drawing instances is limited to the image area only.                                                                                                      |
| slotSpecification.minVertices/maxVertices                                      | false    | number       | (AQC) polygon/3D Polygon/line/3D Polyline contains minimum/maximum points.                                                                                                                                                    |
| slotSpecification.presetSizes.name                                             | false    | string       | The name of Preset size for box3d. name refers to the group name for each set of preset dimensions (length, width, and height).                                                                                               |
| slotSpecification.presetSizes.geometry.width/height/depth                      | false    | number       | Depend on the configuration "slotSpecification.presetSize.name". Preset the length, width, and height of the 3D bounding box.                                                                                                 |
| slotSpecification.maxPadding                                                   | false    | number       | (AQC) Border distance from point cloud for box3d                                                                                                                                                                              |
| slotSpecification.imageSourceMapping                                           | false    | string[]     | It is used to automatically generate 2D instances on 2D images that follow a spatial mapping relationship with the corresponding 3D instance. (except semantic segmentation）.The value is child slot key.(Unique identifier) |

## Input (Input Configuration Item)

| Attribute                  | Required | Type         | Description                                                                                                                                                                                                                                                                        |
| -------------------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                        | true     | string       | Unique identifier, in the format of ${uuid}                                                                                                                                                                                                                                        |
| type                       | true     | string(Enum) | Fixed as "input"                                                                                                                                                                                                                                                                   |
| label                      | true     | string       | Operator name                                                                                                                                                                                                                                                                      |
| inputSpecification.type    | true     | string(Enum) | **select**:Single choice question<br/>**multiple-select**：Multiple choice question<br/>**nested-select**：Nested multiple choice<br/>**multiple-nested-select**:Nested multiple choice<br/> **number**:Input digit <br/>**boolean**:Input true/false<br/> **text**:Input any text |
| inputSpecification.default | false    | string       | Default value.If it is multiple choice, it must be in the choices.                                                                                                                                                                                                                 |
| inputSpecification.items   | false    | InputItem[]  | The items is an option list.<br/>The item.children field is only applicable when the input’s inputSpecification.type is set to either "nested-select" or "multiple-nested-select".And it is used to define multi-level sub-options within an item.                                 |
| metadata.hint              | false    | string       | Hint information for the input                                                                                                                                                                                                                                                     |
| inputOption.required       | false    | boolean      | Whether the input is required                                                                                                                                                                                                                                                      |

### InputItem

| Attribute | Required | Type        | Description                                                                                                                                                                                                  |
| --------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| label     | true     | string      | Option display name                                                                                                                                                                                          |
| value     | true     | string      | Option value - The value of the single-selection type is a string.- The value of the multiple-selection type is an array.- The value of the nested type needs to include the full path (e.g., Fruits/Apple). |
| children  | false    | InputItem[] | Sub-options (required only for nested types)                                                                                                                                                                 |

## SlotChildren

| Attribute                              | Required | Type                   | Description                                                                             |
| -------------------------------------- | -------- | ---------------------- | --------------------------------------------------------------------------------------- |
| key                                    | true     | string                 | Unique identifier, in the format of ${uuid}                                             |
| type                                   | true     | string(Enum)           | Fixed as "slotChildren"                                                                 |
| label                                  | true     | string                 | Operator name                                                                           |
| slotSpecification                      | true     | Slot.slotSpecification | [This is exactly the same as the slotSpecification](#slot-single-layer-annotation-item) |
| slotSpecification.type                 | true     | string(Enum)           | All Slot.type are available                                                             |
| children                               | true     | taxonomy[]             | Set of nested taxonomy items                                                            |
| metadata.hint                          | false    | string                 | Hint information at the SlotChildren level                                              |
| instanceOption.minQuantity/maxQuantity | false    | number                 | (AQC) Min/Max quantity for the instance of slot                                         |

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
├─ Slot (key: point3d-[67890])
└─ Input (key: boolean-[abcd])
```

## Usage Scenario Examples

### 3D Annotation Combination

```json [body]
### Example of 2D Box + 3D Box + multiple Choice
[
    // Top - level nested annotation group, representing a combination of multiple annotations and input items
    {
        "key": "box3d-[70692]", // Unique identifier used to identify this nested annotation group
        "label": "car", // Display name of the annotation group
        "type": "slotChildren", // Type is multi - layer nested annotation group
        "metadata": {
            "hint": "This is the prompt text " // Prompt text to guide user taxonomy
        },
        "slotSpecification": {
            "customColor": "#C200F2", // Custom color for the 3D box
            "type": "box3d", // Annotation type is 3D box
            "presetSizes": [
                {
                    "name": "3",
                    "geometry": {
                        "width": 5,
                        "height": 4,
                        "depth": 6
                    }
                }
            ], // Preset size configuration
            "minVertices": 8, // Minimum number of vertices for the 3D box
            "maxVertices": 9, // Maximum number of vertices for the 3D box
            "maxPadding": 7, // Maximum padding
            "imageSourceMapping": ["box2d-[1570d]"] // Unique identifier of the associated 2D box

        },
        "instanceOption": {
            "minQuantity": 1, // Minimum number of instances of this type
            "maxQuantity": 2 // Maximum number of instances of this type
        },
        "children": [
            {
                "label": "color", // Display name of the input item
                "metadata": {
                    "hint": "color of car" // Prompt text, indicating that this input item is for selecting the color of the car
                },
                "inputSpecification": {
                    "type": "multiple-nested-select", // Input type is multi - layer nested multiple - selection
                    "items": [
                        {
                            "label": "Pedestrian",
                            "value": "People"
                        },
                        {
                            "label": "Car",
                            "value": "Car",
                            "children": [
                                {
                                    "label": "Ferrari",
                                    "value": "Ferrari"
                                },
                                {
                                    "label": "Benz",
                                    "value": "Benz"
                                },
                                {
                                    "label": "Volkswagen",
                                    "value": "Volkswagen"
                                }
                            ]
                        }
                    ],

                    "default": ["Car", "Ferrari"] // Default selected options

                },
                "inputOption": {
                    "required": true // This input item is required
                },
                "key": "select-[94e49]", // Unique identifier used to identify this input item
                "type": "input" // Type is input item
            },
            {
                "key": "box2d-[1570d]", // Unique identifier used to identify this 2D box annotation
                "label": "tyre ", // Display name of the annotation
                "type": "slot", // Type is single - layer annotation item
                "metadata": {
                    "hint": "tyre of car in 2D" // Prompt text, indicating that this annotation is for a 2D car tire
                },
                "slotSpecification": {
                    "type": "box2d", // Annotation type is 2D box
                    "minHeight": 4, // Minimum height of the 2D box
                    "minWidth": 3, // Minimum width of the 2D box
                    "sizeCheckSwitch": true, // Whether to enable size checking
                    "restrictInsideCanvasBoundary": true, // Whether to restrict within the canvas boundary
                    "topLeftMark": "5", // Top - left mark
                    "topRightMark": "6", // Top - right mark
                    "bottomRightMark": "8", // Bottom - right mark
                    "bottomLeftMark": "7" // Bottom - left mark
                },
                "instanceOption": {
                    "minQuantity": 1, // Minimum number of instances of this type
                    "maxQuantity": 2 // Maximum number of instances of this type
                }
            }
        ]
    },
          {
          "key": "group-[7b152]", // Unique identifier for this slot, following a naming convention
          "label": "Instance Group", // Display name for this slot
          "type": "slot", // Indicates that this is a single - layer annotation slot
          "metadata": {}, // Currently, there's no metadata information
          "slotSpecification": {
              "type": "group" // Specifies the type of the annotation as a group
          },
          "instanceOption": {} // No specific instance - related options are set
      }
]
```

### Multi-level Classification Selection

```json [body]
[
  // An input item for boolean selection
  {
    "label": "Boolean select", // Display name for this input item
    "metadata": {
      "hint": "This is the prompt text " // Prompt text to guide user operation
    },
    "inputSpecification": {
      "default": true, // Default value is true
      "type": "boolean" // Input type is boolean
    },
    "inputOption": {
      "required": true // This input is mandatory
    },
    "key": "boolean-[a8a1f]", // Unique identifier for this input item
    "type": "input" // Indicates it's an input item
  },
  // An input item for text input
  {
    "label": "text input", // Display name for this input item
    "metadata": {
      "hint": "This is the prompt text " // Prompt text for user guidance
    },
    "inputSpecification": {
      "type": "text", // Input type is text
      "default": "defult value" // Default input value
    },
    "inputOption": {
      "required": true // This input is required
    },
    "key": "text-[60ed5]", // Unique identifier for this input item
    "type": "input" // Type of this item is input
  },
  // An input item for nested multiple - choice selection
  {
    "label": "nested multiple Choice", // Display name for this input item
    "metadata": {
      "hint": "This is the prompt text " // Prompt text for user interaction
    },
    "inputSpecification": {
      "type": "multiple-nested-select", // Input type is nested multiple - select
      "items": [
        {
          "label": "Pedestrian",
          "value": "People"
        },
        {
          "label": "Car",
          "value": "Car",
          "children": [
            {
              "label": "Ferrari",
              "value": "Ferrari"
            },
            {
              "label": "Benz",
              "value": "Benz"
            },
            {
              "label": "Volkswagen",
              "value": "Volkswagen"
            }
          ]
        }
      ], // List of available options with nested structure
      "default": ["Car", "[\"People\"]"] // Default selected values
    },
    "inputOption": {
      "required": true // This input is mandatory
    },
    "key": "select-[5ec8b]", // Unique identifier for this input item
    "type": "input" // Indicates it's an input item
  },
  // An input item for single - choice question
  {
    "label": "Single choice question", // Display name for this input item
    "metadata": {}, // No metadata information
    "inputSpecification": {
      "type": "select", // Input type is single - select
      "renderConfig": {
        "selectionWidgetType": "Segment"
      }, // Render as segment - style selection widget
      "items": [
        {
          "label": "Car",
          "value": "Car"
        },
        {
          "label": "Truck",
          "value": "Truck"
        },
        {
          "label": "Bicycle",
          "value": "Bicycle"
        }
      ] // List of available single - select options
    },
    "inputOption": {}, // No specific input options
    "key": "select-[0cba9]", // Unique identifier for this input item
    "type": "input" // Type of this item is input
  }
]
```
