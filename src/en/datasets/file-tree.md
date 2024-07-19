::: code-group

```[fileTreeType=0]

├── lidar-name_l0               // "name_l0" refers to your lidar name
│   ├── scene_id_1234           // "scene_id_1234" refers to unique identifier of your scene data
│   │   ├── timestamp0.pcd      // "timestamp0" refers to sampling time, typically an integer in milliseconds
│   │   └── timestamp1.pcd
│   └── scene_id_2345
│       ├── timestamp0.pcd
│       └── timestamp1.pcd
├── lidar-name_l1
│   ├── scene_id_1234
│   │   ├── timestamp0.pcd
│   │   └── timestamp1.pcd
│   └── scene_id_2345
│       ├── timestamp0.pcd
│       └── timestamp1.pcd
├── camera-name_c0              // "name_c0" refers to your camera name
│   ├── scene_id_1234
│   │   ├── timestamp0.jpg
│   │   └── timestamp1.jpg
│   └── scene_id_2345
│       ├── timestamp0.jpg
│       └── timestamp1.jpg
├── camera-name_c1
│   ├── scene_id_1234
│   │   ├── timestamp0.jpg
│   │   └── timestamp1.jpg
│   └── scene_id_2345
│       ├── timestamp0.jpg
│       └── timestamp1.jpg
└── metadata.json

```

<!--
``` [fileTreeType=1]

├── scene_id_1234
│   ├── lidar-name_l0
│   │   ├── timestamp0.pcd
│   │   └── timestamp1.pcd
│   ├── lidar-name_l1
│   │   ├── timestamp0.pcd
│   │   └── timestamp1.pcd
│   ├── camera-name_c0
│   │   ├── timestamp0.jpg
│   │   └── timestamp1.jpg
│   └── camera-name_c1
│       ├── timestamp0.jpg
│       └── timestamp1.jpg
├── scene_id_2345
│   ├── lidar-name_l0
│   │   ├── timestamp0.pcd
│   │   └── timestamp1.pcd
│   ├── lidar-name_l1
│   │   ├── timestamp0.pcd
│   │   └── timestamp1.pcd
│   ├── camera-name_c0
│   │   ├── timestamp0.jpg
│   │   └── timestamp1.jpg
│   └── camera-name_c1
│       ├── timestamp0.jpg
│       └── timestamp1.jpg
└── metadata.json
```
-->

:::

::: code-group

```json [metadata.json SAMPLES]
{
  "version": "1.0",
  "fileTreeType": 0,
  "dataType": 3,
  "lidarSequence": ["name_l0", "name_l1"],
  "cameraSequence": ["name_c0", "name_c1"],
  "cameraCoefficients": [
    {
      "name": "name_c0",
      "width": 1920,
      "height": 1080,
      "camera": {
        "type": "PinHole",
        "heading": {
          "w": 0.9998965768815161,
          "x": -0.008695232232469284,
          "y": -0.006971205169862502,
          "z": 0.009090147167644433
        },
        "position": {
          "x": 0.09735360749789024,
          "y": -0.006173595037573754,
          "z": -0.474067813586117
        },
        "intrinsic": {
          "fx": 8333.333333,
          "fy": 8333.33333,
          "cx": 959.5,
          "cy": 539.5
        },
        "skew": 0,
        "radial": {
          "k1": 0,
          "k2": 0,
          "k3": 0,
          "k4": 0
        },
        "tangential": {
          "p1": 0,
          "p2": 0
        }
      }
    },
    {
      "name": "name_c1",
      "width": 1920,
      "height": 1080,
      "camera": {
        "type": "Fisheye",
        "heading": {
          "w": 0.9998965768815161,
          "x": -0.008695232232469284,
          "y": -0.006971205169862502,
          "z": 0.009090147167644433
        },
        "position": {
          "x": 0.09735360749789024,
          "y": -0.006173595037573754,
          "z": -0.474067813586117
        },
        "intrinsic": {
          "fx": 0,
          "fy": 0,
          "cx": 0,
          "cy": 0
        },
        "skew": 0,
        "radial": {
          "k1": 0,
          "k2": 0,
          "k3": 0,
          "k4": 0
        },
        "tangential": {
          "p1": 0,
          "p2": 0
        }
      }
    }
  ]
}
```

:::
