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

1. Type System

- The slot type is used for geometric annotation.
- The input type is used for parameter configuration.When input has no parent, it describes the task itself. When input
  is in the Children of SlotChildren, it describes the upper slot.
- The slotChildren is used for combining complex tasks.

2. Nesting Rules

- SlotChildren can contain sub-items of any type.
- The nesting structure of Input is implemented through items.children.
- All nested levels need to be uniquely identified by key.

3. Text Data Format

- The value of the single-selection type is a string.
- The value of the multiple-selection type is an array.
- The value of the nested type needs to include the full path (e.g., Fruits/Apple).

| Type         | Description                         | Nesting Capability          | Typical Usage Scenarios    |
| ------------ | ----------------------------------- | --------------------------- | -------------------------- |
| Slot         | Single-layer annotation item        | ❌ Non-nestable             | Basic geometric annotation |
| Input        | Input configuration item            | ✅ Nestable selection items | Parameter setting          |
| SlotChildren | Multi-layer nested annotation group | ✅ Can nest any type        | Composite annotation tasks |

## Slot (Single-layer Annotation Item)

| Attribute                                                                 | Required | Type         | Description                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                                                                       | true     | string       | Unique identifier，The format is ${uuid}                                                                                                                                                                                                                                                                                               |
| type                                                                      | true     | string(Enum) | Is fixed as "slot"                                                                                                                                                                                                                                                                                                                     |
| label                                                                     | true     | string       | Display name                                                                                                                                                                                                                                                                                                                           |
| slotSpecification.type                                                    | true     | string(Enum) | Type enumeration and mapped Helix Annotation Types "polygon3d" mapping "HLX-3D-Polygon","box3d" mapping "HLX-3D-BoundingBox","line3d" mapping "HLX-3D- Polyline", "polygon3d" mapping, "box2d" mapping "HLX-2D-BoundingBox", "line" mapping "HLX-2D-Polyline ", "polygon" mapping "HLX-2D-Polygon" , "point" mapping "HLX-2D-KeyPoint" |
| slotSpecification.customColor                                             | false    | string       | Instance color for the annotation                                                                                                                                                                                                                                                                                                      |
| metadata.hint                                                             | false    | string       | Hint information for the annotation                                                                                                                                                                                                                                                                                                    |
| instanceOption.minMaxQuantity/maxQuantity                                 | false    | number       | Min/Max quantity (AQC) for the annotation                                                                                                                                                                                                                                                                                              |
| slotSpecification.minWidth/minHeight                                      | false    | number       | Min size (AQC) for relevant geometric 2D shapes(eg:2D Box,2D Square,2D Oval,2D Polyline,2D Polygon,2D 3points Polygon)                                                                                                                                                                                                                 |
| slotSpecification.sizeCheckSwitch                                         | false    | boolean      | Dimensional verification flag (AQC) for 2D shapes                                                                                                                                                                                                                                                                                      |
| slotSpecification.topLeftMark/topRightMark/bottomLeftMark/bottomRightMark | false    | string       | vertex labels for box2D an cuboid                                                                                                                                                                                                                                                                                                      |
| slotSpecification.restrictInsideCanvasBoundary                            | false    | boolean      | Only 2D graphics work in 3D layers. Flag indicating whether to annotate within the canvas for 2D shapes.                                                                                                                                                                                                                               |
| slotSpecification.minVertices/maxVertices                                 | false    | number       | Box3d or polygon3d contains minimum/maximum points.                                                                                                                                                                                                                                                                                    |
| slotSpecification.presetSizes.name                                        | false    | string       | The name of Preset size for box3d.Multiple sets can be configured                                                                                                                                                                                                                                                                      |
| slotSpecification.presetSizes.geometry.width/height/depth                 | false    | number       | Depend on the configuration "slotSpecification.presetSize.name". The length, width and height need to be specified separately                                                                                                                                                                                                          |
| slotSpecification.maxPadding                                              | false    | number       | Border distance from point cloud (AQC) for box3d                                                                                                                                                                                                                                                                                       |
| slotSpecification.imageSourceMapping                                      | false    | string[]     | Child source mapping for 3D shapes（except esemantic segmentation）.The value is child key(Unique identifier)                                                                                                                                                                                                                          |
| slotSpecification.mappingScope                                            | false    | string(Enum) | The way 3D（except esemantic segmentation） maps the range to 2D.The enumeration includes: outside, inside, both.                                                                                                                                                                                                                      |

## Input (Input Configuration Item)

| Attribute                                           | Required | Type         | Description                                                                                                                                                                                                                                 |
| --------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                                                 | true     | string       | Unique identifier, in the format of ${uuid}                                                                                                                                                                                                 |
| type                                                | true     | string(Enum) | Fixed as "input"                                                                                                                                                                                                                            |
| label                                               | true     | string       | Display name                                                                                                                                                                                                                                |
| inputSpecification.type                             | true     | string(Enum) | "select":Single choice question, "multiple-select"：Multiple choice question ,"nested-select"：Nested multiple choice,"multiple-nested-select":Nested multiple choice "number":Input digit "boolean":Input true/false "text":Input any text |
| inputSpecification.default                          | false    | string       | Default value.If it is multiple choice, it must be in the choices.                                                                                                                                                                          |
| inputSpecification.items                            | false    | InputItem[]  | Option list (required only for select type)                                                                                                                                                                                                 |
| inputSpecification.renderConfig.selectionWidgetType | false    | string(Enum) | Segment , Dropdown                                                                                                                                                                                                                          |
| metadata.hint                                       | false    | string       | Hint information for the input                                                                                                                                                                                                              |
| inputOption.required                                | false    | boolean      | Whether the input is required                                                                                                                                                                                                               |
| inputSpecification.continuousFrameSync              | false    | boolean      | Attribute synchronization flag                                                                                                                                                                                                              |
| inputSpecification.allowArbitraryInput              | false    | boolean      | Flag indicating whether to show Latex preview for Text Input                                                                                                                                                                                |

### InputItem

| Attribute | Required | Type        | Description                                  |
| --------- | -------- | ----------- | -------------------------------------------- |
| label     | true     | string      | Option display name                          |
| value     | true     | string      | Option value                                 |
| children  | false    | InputItem[] | Sub-options (required only for nested types) |

## SlotChildren (Nested Annotation Group)

| Attribute                  | Required | Type                   | Description                                                               |
| -------------------------- | -------- | ---------------------- | ------------------------------------------------------------------------- |
| key                        | true     | string                 | Unique identifier, in the format of ${uuid}                               |
| type                       | true     | string(Enum)           | Fixed as "slotChildren"                                                   |
| label                      | true     | string                 | Display name                                                              |
| slotSpecification          | true     | Slot.slotSpecification | This is exactly the same as the slotSpecification in the slot table above |
| slotSpecification.type     | true     | string(Enum)           | All Slot.type are available                                               |
| children                   | true     | taxonomy[]             | Set of nested taxonomy items                                              |
| metadata.hint              | false    | string                 | Hint information at the SlotChildren level                                |
| instanceOption.minQuantity | false    | number                 | Minimum quantity of instances                                             |
| instanceOption.maxQuantity | false    | number                 | Maximum quantity of instances                                             |

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
        "exportLabel": "This is the export name ", // Name used for export
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
            "imageSourceMapping": ["box2d-[1570d]"], // Unique identifier of the associated 2D box
            "mappingScope": "inside" // Mapping scope is inside
        },
        "instanceOption": {
            "minQuantity": 1, // Minimum number of instances of this type
            "maxQuantity": 2 // Maximum number of instances of this type
        },
        "children": [
            {
                "label": "color", // Display name of the input item
                "exportLabel": "color of car", // Name used for export
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
                    "continuousFrameSync": true, // Whether to enable continuous frame synchronization
                    "default": ["Car", "Ferrari"], // Default selected options
                    "renderConfig": {
                        "selectionWidgetType": "Segment"
                    }, // Rendering configuration, selection widget type is segmented
                    "allowArbitraryInput": false // Whether to allow arbitrary input
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
                "exportLabel": "This is the export name ", // Name used for export
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
    }
]
```

### Multi-level Classification Selection

```json [body]
[
  // Represents a nested annotation group centered around text selection
  {
    "label": "text select", // Display name for this group
    "exportLabel": "text select", // Name used during export
    "slotSpecification": {
      "minLength": 1, // Minimum length for text - related taxonomy
      "maxLength": 2, // Maximum length for text - related taxonomy
      "type": "text" // Type of text - related taxonomy
    },
    "metadata": {
      "hint": "This is the prompt text " // Prompt text to guide user interaction
    },
    "instanceOption": {
      "minQuantity": 2, // Minimum number of instances allowed
      "maxQuantity": 5 // Maximum number of instances allowed
    },
    "key": "text-[e481a]", // Unique identifier for this nested annotation group
    "type": "slotChildren", // Indicates it's a nested annotation group
    "children": [
      {
        "label": "select option", // Display name for the input item
        "exportLabel": "This is the export name ", // Name used during export
        "metadata": {
          "hint": "This is the prompt text " // Prompt text for the input item
        },
        "inputSpecification": {
          "type": "select", // Input type is a single - select dropdown
          "renderConfig": {
            "selectionWidgetType": "Dropdown" // Render as a dropdown widget
          },
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
          ], // List of available options
          "allowArbitraryInput": true, // Allow users to enter arbitrary values
          "continuousFrameSync": false, // Does not enable continuous frame synchronization
          "default": "Car" // Default selected option
        },
        "inputOption": {
          "required": true // This input item is mandatory
        },
        "key": "select-[5ec8b]", // Unique identifier for this input item
        "type": "input" // Indicates it's an input item
      }
    ]
  },
  {
    "label": "Boolean select", // Display name for the input item
    "exportLabel": "This is the export name ", // Name used during export
    "metadata": {
      "hint": "This is the prompt text " // Prompt text for the input item
    },
    "inputSpecification": {
      "default": true, // Default value is true
      "type": "boolean" // Input type is boolean
    },
    "inputOption": {}, // No additional input options
    "key": "boolean-[a8a1f]", // Unique identifier for this input item
    "type": "input" // Indicates it's an input item
  },
  {
    "label": "text input", // Display name for the input item
    "exportLabel": "This is the export name ", // Name used during export
    "metadata": {
      "hint": "This is the prompt text " // Prompt text for the input item
    },
    "inputSpecification": {
      "type": "text", // Input type is text
      "latex": true, // Supports LaTeX rendering
      "continuousFrameSync": false, // Does not enable continuous frame synchronization
      "default": "defult value", // Default input value
      "regex": "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$" // Regular expression for input validation
    },
    "inputOption": {
      "required": true // This input item is mandatory
    },
    "key": "text-[60ed5]", // Unique identifier for this input item
    "type": "input" // Indicates it's an input item
  }
]
```
