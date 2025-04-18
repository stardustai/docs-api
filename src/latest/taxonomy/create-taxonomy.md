---
title: 'Create Taxonomy'
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
    "description": "Unique identifier for the taxonomy, with a maximum length of 255 bytes.",
    "default": "7d44b43b-3bbd-4f53-9f95-b7c0217d8d5b"
  },
  " taxonomyDetails": {
    "type": "json []",
    "description": "annotation tool json info.",
    "default": [
      {
        "label": "car",
        "slotSpecification": {
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
  },
  "57001": {
    "code": 57001,
    "data": null,
    "message": "Taxonomy json has error: The value 123 of field key cannot be converted to type number. Please check the value of this field.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "57002": {
    "code": 57002,
    "data": null,
    "message": "The key for Taxonomy was repeated.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "57012": {
    "code": 57012,
    "data": null,
    "message": "The label for Taxonomy was repeated.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "57003": {
    "code": 57003,
    "data": null,
    "message": "TaxonomyVersionNam  was repeated.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "57004": {
    "code": 57004,
    "data": null,
    "message": "'imageSourceMapping' value  is not the key of the suboperation.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "57005": {
    "code": 57005,
    "data": null,
    "message": "The minimum attribute is larger than the maximum attribute.",
    "date": "2025-03-13 20:00:00",
    "requestId": "864b70706a7349ea83e177a49800464f",
    "success": false
  },
  "57006": {
    "code": 57006,
    "data": null,
    "message": "The default value is not in the items selection range.",
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

| Rosetta Annotation types | Helix Annotation Types                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| box2d                    | HLX-2D-BoundingBox                                                                                               |
| square                   | HLX-2D-BoundingBox.Square                                                                                        |
| ellipse                  | HLX-2D-BoundingBox.Oval                                                                                          |
| triangle                 | HLX-2D-BoundingBox.3point-polygon                                                                                |
| line                     | HLX-2D-Polyline                                                                                                  |
| polygon                  | HLX-2D-Polygon                                                                                                   |
| point                    | HLX-2D-KeyPoint                                                                                                  |
| box3d                    | HLX-3D-BoundingBox                                                                                               |
| polygon3d                | HLX-3D-BoundingBox.Oval<br/>HLX-3D-BoundingBox.3point-polygon<br/>HLX-3D-BoundingBox.Square <br/>4D Map Labeling |
| line3d                   | HLX-3D-Polyline <br/>4D Map Labeling                                                                             |
| semantic-segmentation3d  | HLX-3D-Polygon.SemSeg<br/>HLX-3D-Polygon.InstanceSeg                                                             |
| select                   | HLX-2D-EventTagging                                                                                              |
| text                     | HLX-Text-TextDescription                                                                                         |
| group                    | 4D Map Labeling                                                                                                  |

## Slot (Single-layer Annotation Item)

| Attribute                                                                      | Required | Type         | Description                                                                                                              |
| ------------------------------------------------------------------------------ | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| key                                                                            | true     | string       | Unique identifier ,in the format of ${uuid}                                                                              |
| type                                                                           | true     | string(Enum) | Is fixed as "slot"                                                                                                       |
| label                                                                          | true     | string       | Operator name                                                                                                            |
| slotSpecification.type                                                         | true     | string(Enum) | [rosetta annotation type](#mapping-of-annotation-types)                                                                  |
| slotSpecification.customColor                                                  | false    | string       | Instance color for the annotation(Color notation in hexadecimal)                                                         |
| metadata.hint                                                                  | false    | string       | Hint information for the annotation                                                                                      |
| instanceOption.minQuantity/maxQuantity                                         | false    | number       | (AQC) Min/Max quantity for the annotation                                                                                |
| slotSpecification.minWidth/minHeight                                           | false    | number       | (AQC)Min size for relevant geometric 2D shapes(eg:2D Box,2D Square,2D Oval,2D Polygon,2D 3points Polygon)                |
| slotSpecification.<br/>topLeftMark/topRightMark/bottomLeftMark/bottomRightMark | false    | string       | vertex labels for box2D                                                                                                  |
| slotSpecification.restrictInsideCanvasBoundary                                 | false    | boolean      | Drawing instances is limited to the image area only.If set to true, drawing instances is limited to the image area only. |

[[]]
| slotSpecification.presetSizes.name | false | string | The name of preset size for box3d. name refers to the group name for each set of preset dimensions (length, width, and height). |
| slotSpecification.presetSizes.geometry.width/height/depth | false | number | Depend on the configuration "slotSpecification.presetSize.name". Preset the length, width, and height of the 3D bounding box. |
| slotSpecification.maxPadding | false | number | (AQC) Border distance from point cloud for box3d |
| slotSpecification.imageSourceMapping | false | string[] | It is used to automatically generate 2D instances on 2D images that follow a spatial mapping relationship with the corresponding 3D instance. (except semantic segmentation）.The value is child slot key(Unique identifier) . |

## Input (Input Configuration Item)

| Attribute                  | Required | Type         | Description                                                                                                                                                                                                                                                                        |
| -------------------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key                        | true     | string       | Unique identifier, in the format of ${uuid}                                                                                                                                                                                                                                        |
| type                       | true     | string(Enum) | Fixed as "input"                                                                                                                                                                                                                                                                   |
| label                      | true     | string       | Operator name                                                                                                                                                                                                                                                                      |
| inputSpecification.type    | true     | string(Enum) | **select**:Single choice question<br/>**multiple-select**：Multiple choice question<br/>**nested-select**：Nested multiple choice<br/>**multiple-nested-select**:Nested multiple choice<br/> **number**:Input digit <br/>**boolean**:Input true/false<br/> **text**:Input any text |
| inputSpecification.default | false    | string       | Default value.If it is multiple choice, it must be one or more values in the option list.                                                                                                                                                                                          |
| inputSpecification.items   | false    | InputItem[]  | Items is an option list.<br/>The item.children field is only applicable when the input’s inputSpecification.type is set to either "nested-select" or "multiple-nested-select".And it is used to define multi-level sub-options within an item.                                     |
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

### 2D annotation

```json [body]
[
  // Represents a nested annotation group (slotChildren) for a 2D box related to a vehicle
  {
    "key": "box2d-[10aa5]", // Unique identifier for this slotChildren item, indicating a 2D box
    "label": "Vehicle", // Display name for this annotation group
    "type": "slotChildren", // Indicates it's a multi-layer nested annotation group
    "slotSpecification": {
      "customColor": "#3000F2", // Custom color for the 2D box
      "type": "box2d", // Type of the annotation is a 2D box
      "restrictInsideCanvasBoundary": true, // Restricts the annotation to be inside the canvas boundary
      "topLeftMark": "1", // Mark for the top-left vertex of the 2D box
      "topRightMark": "2", // Mark for the top-right vertex of the 2D box
      "bottomRightMark": "3", // Mark for the bottom-right vertex of the 2D box
      "bottomLeftMark": "4" // Mark for the bottom-left vertex of the 2D box
    },
    "children": [
      // First input item within the slotChildren group, related to vehicle events
      {
        "key": "select-[798e0]", // Unique identifier for this input item
        "label": "Event of vehicle", // Display name for this input
        "type": "input", // Indicates it's an input item
        "metadata": {
          "hint": "Event of car" // Hint message to provide context about the input
        },
        "inputSpecification": {
          "type": "nested-select", // Input type is nested selection
          "items": [
            {
              "label": "Turning", // Label for the option
              "value": "1", // Value associated with the option
              "children": [
                {
                  "label": "Left turning",
                  "value": "1-1"
                },
                {
                  "label": "Right turning",
                  "value": "1-2"
                },
                {
                  "label": "U-turn",
                  "value": "1-3"
                }
              ] // Nested children options for "Turning"
            },
            {
              "label": "Going straight",
              "value": "2"
            },
            {
              "label": "Applying the brakes",
              "value": "3"
            },
            {
              "label": "Overtaking",
              "value": "4",
              "children": [
                {
                  "label": "Overtaking on the left",
                  "value": "4-1"
                },
                {
                  "label": "Overtaking on the right",
                  "value": "4-2"
                }
              ] // Nested children options for "Overtaking"
            }
          ]
        }
      },
      // Second input item within the slotChildren group, related to vehicle types
      {
        "key": "select-[70603]", // Unique identifier for this input item
        "label": "Type of vehicle", // Display name for this input
        "type": "input", // Indicates it's an input item
        "inputSpecification": {
          "type": "nested-select", // Input type is nested selection
          "items": [
            {
              "label": "Passenger Car", // Label for the option
              "value": "1", // Value associated with the option
              "children": [
                {
                  "label": "Sedan",
                  "value": "1-1"
                },
                {
                  "label": "SUV",
                  "value": "1-2"
                },
                {
                  "label": "MPV",
                  "value": "1-3"
                }
              ] // Nested children options for "Passenger Car"
            },
            {
              "label": "Commercial Vehicle", // Label for the option
              "value": "2", // Value associated with the option
              "children": [
                {
                  "label": "Truck",
                  "value": "2-1"
                },
                {
                  "label": "Bus",
                  "value": "2-2"
                },
                {
                  "label": "Construction Vehicle",
                  "value": "2-3"
                }
              ] // Nested children options for "Commercial Vehicle"
            },
            {
              "label": "Special Vehicle", // Label for the option
              "value": "3", // Value associated with the option
              "children": [
                {
                  "label": "AV Test Vehicle",
                  "value": "3-1"
                }
              ] // Nested children options for "Special Vehicle"
            }
          ]
        }
      }
    ]
  }
]
```

### 3D annotation

```json [body]
[
  // Represents a nested annotation group (slotChildren) for a 3D box related to a vehicle
  {
    "key": "box3d-[6fa96]", // Unique identifier for this slotChildren item, indicating a 3D box
    "label": "Vehicle", // Display name for this annotation group
    "type": "slotChildren", // Indicates it's a multi-layer nested annotation group
    "slotSpecification": {
      "customColor": "#00CC52", // Custom color for the 3D box
      "type": "box3d" // Type of the annotation is a 3D box
    },
    "instanceOption": {}, // No specific instance-related options set
    "children": [
      // First input item within the slotChildren group, related to vehicle types
      {
        "key": "select-[6e913]", // Unique identifier for this input item
        "label": "Type of vehicle", // Display name for this input
        "type": "input", // Indicates it's an input item
        "metadata": {}, // No metadata information for this input item
        "inputSpecification": {
          "type": "nested-select", // Input type is nested selection
          "items": [
            {
              "label": "Passenger Car", // Label for the option
              "value": "1", // Value associated with the option
              "children": [
                {
                  "label": "Sedan",
                  "value": "1-1"
                },
                {
                  "label": "SUV",
                  "value": "1-2"
                },
                {
                  "label": "MPV",
                  "value": "1-3"
                }
              ] // Nested children options for "Passenger Car"
            },
            {
              "label": "Commercial Vehicle", // Label for the option
              "value": "2", // Value associated with the option
              "children": [
                {
                  "label": "Truck",
                  "value": "2-1"
                },
                {
                  "label": "Bus",
                  "value": "2-2"
                },
                {
                  "label": "Construction Vehicle",
                  "value": "2-3"
                }
              ] // Nested children options for "Commercial Vehicle"
            },
            {
              "label": "Special Vehicle", // Label for the option
              "value": "3", // Value associated with the option
              "children": [
                {
                  "label": "AV Test Vehicle",
                  "value": "3-1"
                }
              ] // Nested children options for "Special Vehicle"
            }
          ]
        }
      },
      // Second input item within the slotChildren group, related to car events
      {
        "key": "select-[cd8ec]", // Unique identifier for this input item
        "label": "Event of car", // Display name for this input
        "type": "input", // Indicates it's an input item
        "metadata": {
          "hint": "Event of car" // Hint message to provide context about the input
        },
        "inputSpecification": {
          "type": "nested-select", // Input type is nested selection
          "items": [
            {
              "label": "Turning", // Label for the option
              "value": "1", // Value associated with the option
              "children": [
                {
                  "label": "Left turning",
                  "value": "1-1"
                },
                {
                  "label": "Right turning",
                  "value": "1-2"
                },
                {
                  "label": "U-turn",
                  "value": "1-3"
                }
              ] // Nested children options for "Turning"
            },
            {
              "label": "Going straight",
              "value": "2"
            },
            {
              "label": "Applying the brakes",
              "value": "3"
            },
            {
              "label": "Overtaking",
              "value": "4",
              "children": [
                {
                  "label": "Overtaking on the left",
                  "value": "4-1"
                },
                {
                  "label": "Overtaking on the right",
                  "value": "4-2"
                }
              ] // Nested children options for "Overtaking"
            }
          ]
        }
      }
    ]
  }
]
```

### 2D+3D fusion annotation

```json [body]
[
  // Represents a nested annotation group (slotChildren) for a 3D box related to a vehicle
  {
    "key": "box3d-[6fa96]", // Unique identifier for this slotChildren item, indicating a 3D box
    "label": "Vehicle in 3D", // Display name for this annotation group, specifying it's a 3D vehicle
    "type": "slotChildren", // Indicates that this is a multi-layer nested annotation group
    "slotSpecification": {
      "customColor": "#3000F2", // Custom color for the 3D box
      "type": "box3d", // The type of annotation is a 3D box
      "imageSourceMapping": ["box2d-[fd7c0]"] // Mapping to the source 2D box (using its key), indicating a relationship between 2D and 3D
    },
    "children": [
      // First item within the children, a 2D box slot related to the vehicle
      {
        "key": "box2d-[fd7c0]", // Unique identifier for this 2D box slot item
        "label": "Vehicle in 2D", // Display name for this 2D annotation, specifying it's a 2D vehicle
        "type": "slot", // Indicates that this is a single-layer annotation slot
        "slotSpecification": {
          "customColor": "#3000F2", // Custom color for the 2D box
          "type": "box2d", // The type of annotation is a 2D box
          "restrictInsideCanvasBoundary": true, // Restricts the annotation to be inside the canvas boundary
          "topLeftMark": "1", // Mark for the top-left vertex of the 2D box
          "topRightMark": "2", // Mark for the top-right vertex of the 2D box
          "bottomRightMark": "3", // Mark for the bottom-right vertex of the 2D box
          "bottomLeftMark": "4" // Mark for the bottom-left vertex of the 2D box
        }
      },
      // Second item within the children, an input item related to car events
      {
        "key": "select-[cd8ec]", // Unique identifier for this input item
        "label": "Event of car", // Display name for this input, indicating it's about car events
        "type": "input", // Indicates that this is an input item
        "inputSpecification": {
          "type": "nested-select", // Input type is nested selection
          "items": [
            {
              "label": "Turning", // Label for the option
              "value": "1", // Value associated with the option
              "children": [
                {
                  "label": "Left turning",
                  "value": "1-1"
                },
                {
                  "label": "Right turning",
                  "value": "1-2"
                },
                {
                  "label": "U-turn",
                  "value": "1-3"
                }
              ] // Nested children options for "Turning"
            },
            {
              "label": "Going straight",
              "value": "2"
            },
            {
              "label": "Applying the brakes",
              "value": "3"
            },
            {
              "label": "Overtaking",
              "value": "4",
              "children": [
                {
                  "label": "Overtaking on the left",
                  "value": "4-1"
                },
                {
                  "label": "Overtaking on the right",
                  "value": "4-2"
                }
              ] // Nested children options for "Overtaking"
            }
          ]
        }
      },
      // Third item within the children, an input item related to vehicle types
      {
        "key": "select-[48520]", // Unique identifier for this input item
        "label": "Type of vehicle", // Display name for this input, indicating it's about vehicle types
        "type": "input", // Indicates that this is an input item
        "inputSpecification": {
          "type": "nested-select", // Input type is nested selection
          "items": [
            {
              "label": "Passenger Car", // Label for the option
              "value": "1", // Value associated with the option
              "children": [
                {
                  "label": "Sedan",
                  "value": "1-1"
                },
                {
                  "label": "SUV",
                  "value": "1-2"
                },
                {
                  "label": "MPV",
                  "value": "1-3"
                }
              ] // Nested children options for "Passenger Car"
            },
            {
              "label": "Commercial Vehicle", // Label for the option
              "value": "2", // Value associated with the option
              "children": [
                {
                  "label": "Truck",
                  "value": "2-1"
                },
                {
                  "label": "Bus",
                  "value": "2-2"
                },
                {
                  "label": "Construction Vehicle",
                  "value": "2-3"
                }
              ] // Nested children options for "Commercial Vehicle"
            },
            {
              "label": "Special Vehicle", // Label for the option
              "value": "3", // Value associated with the option
              "children": [
                {
                  "label": "AV Test Vehicle",
                  "value": "3-1"
                }
              ] // Nested children options for "Special Vehicle"
            }
          ]
        }
      }
    ]
  }
]
```

### 4D map annotation

```json [body]
[
  // Represents a nested annotation group (slotChildren) for 3D lane lines
  {
    "key": "line3d-[d2b3a]", // Unique identifier for this slotChildren item, indicating a 3D line
    "label": "Lane lines", // Display name for this annotation group
    "type": "slotChildren", // Indicates it's a multi-layer nested annotation group
    "slotSpecification": {
      "customColor": "#0061F2", // Custom color for the 3D line
      "type": "line3d" // Type of the annotation is a 3D line
    },
    "children": [
      // Input item within the slotChildren group, related to the type of lane line
      {
        "key": "select-[c8545]", // Unique identifier for this input item
        "label": "Type of lane line", // Display name for this input
        "type": "input", // Indicates it's an input item
        "inputSpecification": {
          "type": "select", // Input type is single-select
          "items": [
            {
              "label": "Solid White Line", // Label for the option
              "value": "1" // Value associated with the option
            },
            {
              "label": "Dashed White Line",
              "value": "2"
            },
            {
              "label": "Solid Yellow Line",
              "value": "3"
            },
            {
              "label": "Dashed Yellow Line",
              "value": "4"
            },
            {
              "label": "Double Solid White Lines",
              "value": "5"
            },
            {
              "label": "Double Solid Yellow Lines",
              "value": "6"
            },
            {
              "label": "Double Yellow Line (One Solid, One Dashed)",
              "value": "7"
            }
          ]
        }
      }
    ]
  },
  // Represents a single-layer annotation slot for the center line of a lane (3D line)
  {
    "key": "line3d-[80638]", // Unique identifier for this slot item
    "label": "Center line of lane", // Display name for this annotation
    "type": "slot", // Indicates it's a single-layer annotation slot
    "slotSpecification": {
      "customColor": "#00CC52", // Custom color for the 3D line
      "type": "line3d" // Type of the annotation is a 3D line
    }
  },
  // Represents a single-layer annotation slot for the stop line (3D line)
  {
    "key": "line3d-[f8e3c]", // Unique identifier for this slot item
    "label": "Stop line", // Display name for this annotation
    "type": "slot", // Indicates it's a single-layer annotation slot
    "slotSpecification": {
      "customColor": "#C200F2", // Custom color for the 3D line
      "type": "line3d" // Type of the annotation is a 3D line
    }
  },
  // Represents a single-layer annotation slot for a lane group with a stop line
  {
    "key": "group-[9b60d]", // Unique identifier for this slot item
    "label": "Lane Group with Stop Line", // Display name for this annotation
    "type": "slot", // Indicates it's a single-layer annotation slot
    "metadata": {}, // No metadata information
    "slotSpecification": {
      "type": "group" // Specifies the type of the annotation as a group
    }
  },
  // Represents a single-layer annotation slot for a traffic light (3D box)
  {
    "key": "box3d-[1abf2]", // Unique identifier for this slot item
    "label": "Traffic light", // Display name for this annotation
    "type": "slot", // Indicates it's a single-layer annotation slot
    "slotSpecification": {
      "customColor": "#0061F2", // Custom color for the 3D box
      "type": "box3d" // Type of the annotation is a 3D box
    },
    "instanceOption": {} // No specific instance-related options set
  },
  // Represents a nested annotation group (slotChildren) for a 3D traffic sign (polygon)
  {
    "key": "polygon3d-[52655]", // Unique identifier for this slotChildren item, indicating a 3D polygon
    "label": "Traffic sign", // Display name for this annotation group
    "type": "slotChildren", // Indicates it's a multi-layer nested annotation group
    "slotSpecification": {
      "customColor": "#C200F2", // Custom color for the 3D polygon
      "type": "polygon3d" // Type of the annotation is a 3D polygon
    },
    "children": [
      // Input item within the slotChildren group, related to the type of traffic sign
      {
        "key": "select-[5d292]", // Unique identifier for this input item
        "label": "Type of traffic sign", // Display name for this input
        "type": "input", // Indicates it's an input item
        "inputSpecification": {
          "type": "select", // Input type is single-select
          "items": [
            {
              "label": "Warning Signs", // Label for the option
              "value": "1" // Value associated with the option
            },
            {
              "label": "Prohibitory Signs",
              "value": "2"
            },
            {
              "label": "Mandatory Signs",
              "value": "3"
            },
            {
              "label": "Guide Signs",
              "value": "4"
            },
            {
              "label": "Work Zone Signs",
              "value": "5"
            }
          ]
        }
      }
    ]
  }
]
```
