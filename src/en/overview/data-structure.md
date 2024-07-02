---
title: 'Data Structure'
slug: 'data-structure'
description: ''
hidden: false
createdAt: 'Thu May 16 2024 14:01:06 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Fri May 17 2024 14:56:17 GMT+0000 (Coordinated Universal Time)'
---

This comprehensive data structure documentation provides detailed specifications and schemas for all data objects within the Stardust ecosystem. It serves as an essential reference for developers integrating with or extending Morningstar and Rosetta, ensuring seamless data exchange and compatibility. Whether you're working with projects, tasks, annotations, or any other data element, this resource offers the necessary guidance to understand, manipulate, and utilize the rich information available within Stardust's platforms.

## Import

### Image Annotation

::: code-group

```json [SingleCamera]
{
  "attachmentType": "IMAGE",
  "attachment": "oss://stardust-data/Production/xingchen_12_4119_city/20231110_1camera_1_4119/jc08_suz_Ew_0b_sunny_m_0_1699577442197.jpg",
  "metadata": {
    "uniqueIdentifier": "329345877854392320", // Task object ID in your platform
    "preprocessedData": {},
    "additionalInfo": {
      "annotationResultUrl": ""
      // You can list any other parameter below
    }
  }
}
```

```json [MultiCameras]
{
  "attachmentType": "IMAGE_SET_SEQUENCE",
  "metadata": {
        "uniqueIdentifier": "329345877854392320", // Task object ID in your platform
        "preprocessedData":{},
        "additionalInfo":{
          "annotationResultUrl":""
          // You can list any other parameter below
        }
    }
  "attachment":[
      {
        "name": "merge_bev",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/merge_bev/1676636846086413.png"
      },
      {
        "name": "rf_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/rf_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "lf_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/lf_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "lr_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/lr_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "rr_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/rr_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "front_middle_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/front_middle_camera/1676636846086413.jpg"
      },
      {
        "name": "front_short_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/front_short_camera/1676636846086413.jpg"
      }
    ]
}
```

:::

### Image Sequence Annotation

::: code-group

```json [SingleCamera]
{
  "attachmentType": "IMAGE_SEQUENCE",
  "attachment": [
    "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Production/20211226/right/2021-12-26-11-22-04-00038_1678_bird_ml.png",
    "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Production/20211226/right/2021-12-26-11-22-04-00038_1679_bird_ml.png",
    "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Production/20211226/right/2021-12-26-11-22-04-00038_1706_bird_ml.png"
  ],
  "metadata": {
    "uniqueIdentifier": "0b5e4671-452a-45ca-9779-1dc6e277150b", // Task object ID in your platform
    "additionalInfo": {
      "annotationResultUrl": ""
      // You can list any other parameter below
    }
  }
}
```

```json [MultiCameras]
{
  "attachmentType": "IMAGE_SET_SEQUENCE",
  "metadata": {
        "uniqueIdentifier": "329345877854392320", // Task object ID in your platform
        "preprocessedData":{},
        "additionalInfo":{
          "annotationResultUrl":""
          // You can list any other parameter below
        }
    }
  "attachment": [
    [
      {
        "name": "merge_bev",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/merge_bev/1676636846086413.png"
      },
      {
        "name": "rf_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/rf_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "lf_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/lf_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "lr_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/lr_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "rr_wide_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/rr_wide_camera/1676636846086413.jpg"
      },
      {
        "name": "front_middle_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/front_middle_camera/1676636846086413.jpg"
      },
      {
        "name": "front_short_camera",
        "url": "oss://stardust-data/Production/642b96c1df6b00dd2d1282e5/HP-30-V71-AC-021_1676636840_1676636849/front_short_camera/1676636846086413.jpg"
      }
    ]
  ]
}
```

:::

### PointCloud Annotation

::: code-group

```json [SingleFrame]
{
  "attachmentType": "POINTCLOUD",
  "metadata": {
    "uniqueIdentifier": "3c665b98-6594-45a7-8722-ecce0d225589"
  },
  "attachment": {
    "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/pcd/1.pcd",
    "coordinate": {
      "camera_height": 2
    },
    "scopeLimit": [
      {
        "radius": 100,
        "type": "circle"
      }
    ],
    "imageSources": [
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/front_camera/1.png",
        "name": "front_camera",
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
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/back_camera/1.png",
        "name": "back_camera",
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
      }
    ]
  }
}
```

```json [Sequence]
{
  "attachmentType": "POINTCLOUD_SEQUENCE",
  "metadata": {
    "uniqueIdentifier": "3c665b98-6594-45a7-8722-ecce0d225589"
  },
  "attachment": [
    {
      "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/pcd/1.pcd",
      "coordinate": {
        "camera_height": 2
      },
      "scopeLimit": [
        {
          "radius": 100,
          "type": "circle"
        }
      ],
      "imageSources": [
        {
          "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/front_camera/1.png",
          "name": "front_camera",
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
              "k3": 0
            },
            "tangential": {
              "p1": 0,
              "p2": 0
            }
          }
        },
        {
          "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/back_camera/1.png",
          "name": "back_camera",
          "width": 1920,
          "height": 1080,
          "camera": {
            "type": "PinHole",
            "heading": {
              "w": -0.469990267059842,
              "x": 0.5172219537574251,
              "y": 0.5271245940295847,
              "z": -0.4834565769430754
            },
            "position": {
              "x": -0.2117782455635122,
              "y": 0.007687532381660913,
              "z": -0.1444383493927902
            },
            "intrinsic": {
              "fx": 2028.8960860456893,
              "fy": 2021.943976185738,
              "cx": 975.0867262748408,
              "cy": 542.1191224289227
            },
            "skew": 0,
            "radial": {
              "k1": -0.3800943983127283,
              "k2": 0.1714931036510359,
              "k3": -0.001999524932595834
            },
            "tangential": {
              "p1": 0.0005520383017090625,
              "p2": 0
            }
          }
        }
      ]
    },
    {
      "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/pcd/1.pcd",
      "coordinate": {
        "camera_height": 2
      },
      "scopeLimit": [
        {
          "radius": 100,
          "type": "circle"
        }
      ],
      "imageSources": [
        {
          "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/front_camera/1.png",
          "name": "front_camera",
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
              "k3": 0
            },
            "tangential": {
              "p1": 0,
              "p2": 0
            }
          }
        },
        {
          "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/projects/pandaset/back_camera/1.png",
          "name": "back_camera",
          "width": 1920,
          "height": 1080,
          "camera": {
            "type": "PinHole",
            "heading": {
              "w": -0.469990267059842,
              "x": 0.5172219537574251,
              "y": 0.5271245940295847,
              "z": -0.4834565769430754
            },
            "position": {
              "x": -0.2117782455635122,
              "y": 0.007687532381660913,
              "z": -0.1444383493927902
            },
            "intrinsic": {
              "fx": 2028.8960860456893,
              "fy": 2021.943976185738,
              "cx": 975.0867262748408,
              "cy": 542.1191224289227
            },
            "skew": 0,
            "radial": {
              "k1": -0.3800943983127283,
              "k2": 0.1714931036510359,
              "k3": -0.001999524932595834
            },
            "tangential": {
              "p1": 0.0005520383017090625,
              "p2": 0
            }
          }
        }
      ]
    }
  ]
}
```

:::

### 2D/3D Linking Annotation

::: code-group

```json [SingleFrame]
{
  "attachmentType": "POINTCLOUD",
  "attachment": {
    "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Clients/Production/20221116/63733abbaaaeeff2f84e77c0/center_128_lidar_scan_data/1665443107991098.pcd",
    "imageSources": [
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Clients/Production/20221116/63733abbaaaeeff2f84e77c0/front_short_camera/1665443107982972.jpg",
        "name": "front_short_camera",
        "height": 2160,
        "width": 3840,
        "camera": {
          "type": "PinHole",
          "heading": {
            "x": -0.000426751972615772,
            "y": -0.7052460775196997,
            "z": 0.7089350105823575,
            "w": 0.006240095866588423
          },
          "intrinsic": {
            "cx": 1963.91845703125,
            "cy": 1159.89794921875,
            "fx": 1936.98291015625,
            "fy": 1950.4716796875
          },
          "position": {
            "x": -0.16865813391504617,
            "y": -1.0839353994029057,
            "z": -0.6167478578644963
          },
          "radial": {
            "k1": -0.36582934856414795,
            "k2": 0.17276597023010254,
            "k3": -0.04531659558415413
          },
          "tangential": {
            "p1": 0.0005327821709215641,
            "p2": 0.00010382403706898913
          },
          "skew": 0
        }
      },
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Clients/Production/20221116/63733abbaaaeeff2f84e77c0/front_middle_camera/1665443107991208.jpg",
        "name": "front_middle_camera",
        "height": 2160,
        "width": 3840,
        "camera": {
          "type": "PinHole",
          "heading": {
            "x": -0.00036082500564178375,
            "y": -0.6951687009866596,
            "z": 0.7188168230090155,
            "w": 0.006536201730447786
          },
          "intrinsic": {
            "cx": 1912.7196044921875,
            "cy": 1044.70458984375,
            "fx": 3758.082763671875,
            "fy": 3754.023193359375
          },
          "position": {
            "x": 0.046752581391528734,
            "y": -1.1007720849585607,
            "z": -0.6272555616002693
          },
          "radial": {
            "k1": -0.32918107509613037,
            "k2": -0.3226792812347412,
            "k3": 0.7430014610290527
          },
          "tangential": {
            "p1": 0.003707782831043005,
            "p2": 0.002273577032610774
          },
          "skew": 0
        }
      },
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Clients/Production/20221116/63733abbaaaeeff2f84e77c0/front_right_camera/1665443108016086.jpg",
        "name": "front_right_camera",
        "height": 1080,
        "width": 1920,
        "camera": {
          "type": "PinHole",
          "heading": {
            "x": 0.2620357348225807,
            "y": 0.6684881486829611,
            "z": -0.6422930998804716,
            "w": -0.2681798698492337
          },
          "intrinsic": {
            "cx": 960.633056640625,
            "cy": 524.162109375,
            "fx": 1295.84375,
            "fy": 1299.4844970703125
          },
          "position": {
            "x": -0.978517482868191,
            "y": -1.580236973388514,
            "z": -1.1554553816352366
          },
          "radial": {
            "k1": -0.45515379309654236,
            "k2": 0.21709179878234863,
            "k3": -0.05673150718212128
          },
          "tangential": {
            "p1": -0.0018640662310644984,
            "p2": 0.0023196430411189795
          },
          "skew": 0
        }
      },
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Clients/Production/20221116/63733abbaaaeeff2f84e77c0/rear_right_camera/1665443108041122.jpg",
        "name": "rear_right_camera",
        "height": 1080,
        "width": 1920,
        "camera": {
          "type": "PinHole",
          "heading": {
            "x": -0.6396166282378611,
            "y": -0.2779380079589888,
            "z": 0.25799743532798125,
            "w": 0.6686391822033787
          },
          "intrinsic": {
            "cx": 915.919189453125,
            "cy": 532.6887817382812,
            "fx": 1304.159423828125,
            "fy": 1299.1961669921875
          },
          "position": {
            "x": -1.0368697804975378,
            "y": -1.468860689472833,
            "z": -1.0626727177885789
          },
          "radial": {
            "k1": -0.45264357328414917,
            "k2": 0.22412949800491333,
            "k3": -0.06240077316761017
          },
          "tangential": {
            "p1": 0.00458842609077692,
            "p2": 0.00009593416325515136
          },
          "skew": 0
        }
      },
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Clients/Production/20221116/63733abbaaaeeff2f84e77c0/rear_left_camera/1665443108066099.jpg",
        "name": "rear_left_camera",
        "height": 1080,
        "width": 1920,
        "camera": {
          "type": "PinHole",
          "heading": {
            "x": -0.643662078856406,
            "y": 0.26928217010009764,
            "z": -0.28312864928595227,
            "w": 0.6580459019414558
          },
          "intrinsic": {
            "cx": 984.5901489257812,
            "cy": 530.368408203125,
            "fx": 1300.796142578125,
            "fy": 1301.7945556640625
          },
          "position": {
            "x": 1.0278829852684408,
            "y": -1.4292861642645494,
            "z": -1.1480722519271476
          },
          "radial": {
            "k1": -0.4671289026737213,
            "k2": 0.24414439499378204,
            "k3": -0.07104960829019547
          },
          "tangential": {
            "p1": 0.0007040140335448086,
            "p2": -0.0003563318750821054
          },
          "skew": 0
        }
      },
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com/Clients/Production/20221116/63733abbaaaeeff2f84e77c0/front_left_camera/1665443108091107.jpg",
        "name": "front_left_camera",
        "height": 1080,
        "width": 1920,
        "camera": {
          "type": "PinHole",
          "heading": {
            "x": -0.2684676064452191,
            "y": 0.6581343995879676,
            "z": -0.6523240482149554,
            "w": 0.26316837288894157
          },
          "intrinsic": {
            "cx": 911.50048828125,
            "cy": 597.6900024414062,
            "fx": 1306.498046875,
            "fy": 1307.0736083984375
          },
          "position": {
            "x": 1.0542949031914148,
            "y": -1.514214888818965,
            "z": -1.1567284356908758
          },
          "radial": {
            "k1": -0.46694880723953247,
            "k2": 0.23439936339855194,
            "k3": -0.06476845592260361
          },
          "tangential": {
            "p1": -0.0008570670033805072,
            "p2": 0.0033822651021182537
          },
          "skew": 0
        }
      }
    ]
  },
  "metadata": {
    "uniqueIdentifier": "940e8a0b-680a-416a-9b5d-20e7cd8f1a65"
  }
}
```

```json [Sequence]
{
    "attachmentType": "POINTCLOUD_SEQUENCE",
    "attachment": [
      {
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/center_128_lidar_scan_data/1651471600094546.pcd",
        "imageSources": [
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/front_middle_camera/49301522692967249.jpg",
            "name": "front_middle_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": -0.006190351930136008,
                "y": -0.6825909468739847,
                "z": 0.730708169300375,
                "w": 0.009841245162714167
              },
              "intrinsic": {
                "cx": 917.376708984375,
                "cy": 535.986083984375,
                "fx": 1962.507080078125,
                "fy": 1975.4185791015625
              },
              "position": {
                "x": -0.03393279803920432,
                "y": -0.9824955538581996,
                "z": -0.6905884164095557
              },
              "radial": {
                "k1": -0.5603818297386169,
                "k2": 0.29072123765945435,
                "k3": -0.0443141832947731
              },
              "tangential": {
                "p1": -0.00316324713639915,
                "p2": 0.0023189259227365255
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/front_right_camera/49301524421020497.jpg",
            "name": "front_right_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.28212223823361593,
                "y": 0.655924383311709,
                "z": -0.6477834604429857,
                "w": -0.26560654067194905
              },
              "intrinsic": {
                "cx": 930.5054321289062,
                "cy": 559.3945922851562,
                "fx": 1303.9383544921875,
                "fy": 1304.7991943359375
              },
              "position": {
                "x": -1.0387535661569465,
                "y": -1.4728525906468304,
                "z": -1.141712538129474
              },
              "radial": {
                "k1": -0.4648747444152832,
                "k2": 0.23283876478672028,
                "k3": -0.060612037777900696
              },
              "tangential": {
                "p1": 0.0003024185716640204,
                "p2": -0.0007405730430036783
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/rear_right_camera/49301525125663569.jpg",
            "name": "rear_right_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": -0.6508884815130986,
                "y": -0.2664356313228488,
                "z": 0.26930891679733293,
                "w": 0.6578973676255399
              },
              "intrinsic": {
                "cx": 927.9263916015625,
                "cy": 585.9122924804688,
                "fx": 1303.294677734375,
                "fy": 1303.3370361328125
              },
              "position": {
                "x": -1.032768920126788,
                "y": -1.325946047032492,
                "z": -1.20497924356792
              },
              "radial": {
                "k1": -0.4748017489910126,
                "k2": 0.26102641224861145,
                "k3": -0.08296141028404236
              },
              "tangential": {
                "p1": 0.000020827756088692695,
                "p2": -0.0000884455002960749
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/rear_middle_camera/49301525192772433.jpg",
            "name": "rear_middle_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.7108457774238802,
                "y": 0.003141402062123815,
                "z": -0.00341087052176314,
                "w": -0.7033326227852701
              },
              "intrinsic": {
                "cx": 943.4086303710938,
                "cy": 464.43853759765625,
                "fx": 1953.394775390625,
                "fy": 1954.369140625
              },
              "position": {
                "x": 0.02397049288273318,
                "y": 1.6411737093396161,
                "z": -0.44616500679403037
              },
              "radial": {
                "k1": -0.5849335789680481,
                "k2": 0.43097883462905884,
                "k3": -0.27481383085250854
              },
              "tangential": {
                "p1": 0.002693974180147052,
                "p2": 0.0009169353870674968
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/rear_left_camera/49301525243104081.jpg",
            "name": "rear_left_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.6588485214820107,
                "y": -0.2769018882227734,
                "z": 0.2819036723457992,
                "w": -0.6401361492351324
              },
              "intrinsic": {
                "cx": 975.451904296875,
                "cy": 546.0950927734375,
                "fx": 1316.8775634765625,
                "fy": 1319.2537841796875
              },
              "position": {
                "x": 0.933314957135303,
                "y": -1.3798262734672557,
                "z": -1.160325016964491
              },
              "radial": {
                "k1": -0.49847084283828735,
                "k2": 0.30014222860336304,
                "k3": -0.10865428298711777
              },
              "tangential": {
                "p1": -0.0005013196496292949,
                "p2": 0.002477574162185192
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/front_left_camera/49301526887271249.jpg",
            "name": "front_left_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.2696730459030246,
                "y": -0.6540070045882386,
                "z": 0.65642704579091,
                "w": -0.262020647692359
              },
              "intrinsic": {
                "cx": 946.2857666015625,
                "cy": 495.1999206542969,
                "fx": 1308.9053955078125,
                "fy": 1308.5472412109375
              },
              "position": {
                "x": 0.923326570615037,
                "y": -1.5252789860746692,
                "z": -1.1927617866747138
              },
              "radial": {
                "k1": -0.4831980764865875,
                "k2": 0.2728261351585388,
                "k3": -0.08650419116020203
              },
              "tangential": {
                "p1": 0.0027712939772754908,
                "p2": 0.0008803523960523307
              },
              "skew": 0
            }
          }
        ]
      },
      {
        "scopeLimit": [
          {
            "type": "circle",
            "radius": 150
          }
        ],
        "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/center_128_lidar_scan_data/1651471600285780.pcd",
        "imageSources": [
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/front_middle_camera/49301531165461329.jpg",
            "name": "front_middle_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": -0.006190351930136008,
                "y": -0.6825909468739847,
                "z": 0.730708169300375,
                "w": 0.009841245162714167
              },
              "intrinsic": {
                "cx": 917.376708984375,
                "cy": 535.986083984375,
                "fx": 1962.507080078125,
                "fy": 1975.4185791015625
              },
              "position": {
                "x": -0.03393279803920432,
                "y": -0.9824955538581996,
                "z": -0.6905884164095557
              },
              "radial": {
                "k1": -0.5603818297386169,
                "k2": 0.29072123765945435,
                "k3": -0.0443141832947731
              },
              "tangential": {
                "p1": -0.00316324713639915,
                "p2": 0.0023189259227365255
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/front_right_camera/49301531685555025.jpg",
            "name": "front_right_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.28212223823361593,
                "y": 0.655924383311709,
                "z": -0.6477834604429857,
                "w": -0.26560654067194905
              },
              "intrinsic": {
                "cx": 930.5054321289062,
                "cy": 559.3945922851562,
                "fx": 1303.9383544921875,
                "fy": 1304.7991943359375
              },
              "position": {
                "x": -1.0387535661569465,
                "y": -1.4728525906468304,
                "z": -1.141712538129474
              },
              "radial": {
                "k1": -0.4648747444152832,
                "k2": 0.23283876478672028,
                "k3": -0.060612037777900696
              },
              "tangential": {
                "p1": 0.0003024185716640204,
                "p2": -0.0007405730430036783
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/rear_right_camera/49301533682043729.jpg",
            "name": "rear_right_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": -0.6508884815130986,
                "y": -0.2664356313228488,
                "z": 0.26930891679733293,
                "w": 0.6578973676255399
              },
              "intrinsic": {
                "cx": 927.9263916015625,
                "cy": 585.9122924804688,
                "fx": 1303.294677734375,
                "fy": 1303.3370361328125
              },
              "position": {
                "x": -1.032768920126788,
                "y": -1.325946047032492,
                "z": -1.20497924356792
              },
              "radial": {
                "k1": -0.4748017489910126,
                "k2": 0.26102641224861145,
                "k3": -0.08296141028404236
              },
              "tangential": {
                "p1": 0.000020827756088692695,
                "p2": -0.0000884455002960749
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/rear_middle_camera/49301533732375377.jpg",
            "name": "rear_middle_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.7108457774238802,
                "y": 0.003141402062123815,
                "z": -0.00341087052176314,
                "w": -0.7033326227852701
              },
              "intrinsic": {
                "cx": 943.4086303710938,
                "cy": 464.43853759765625,
                "fx": 1953.394775390625,
                "fy": 1954.369140625
              },
              "position": {
                "x": 0.02397049288273318,
                "y": 1.6411737093396161,
                "z": -0.44616500679403037
              },
              "radial": {
                "k1": -0.5849335789680481,
                "k2": 0.43097883462905884,
                "k3": -0.27481383085250854
              },
              "tangential": {
                "p1": 0.002693974180147052,
                "p2": 0.0009169353870674968
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/rear_left_camera/49301533816261457.jpg",
            "name": "rear_left_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.6588485214820107,
                "y": -0.2769018882227734,
                "z": 0.2819036723457992,
                "w": -0.6401361492351324
              },
              "intrinsic": {
                "cx": 975.451904296875,
                "cy": 546.0950927734375,
                "fx": 1316.8775634765625,
                "fy": 1319.2537841796875
              },
              "position": {
                "x": 0.933314957135303,
                "y": -1.3798262734672557,
                "z": -1.160325016964491
              },
              "radial": {
                "k1": -0.49847084283828735,
                "k2": 0.30014222860336304,
                "k3": -0.10865428298711777
              },
              "tangential": {
                "p1": -0.0005013196496292949,
                "p2": 0.002477574162185192
              },
              "skew": 0
            }
          },
          {
            "url": "https://stardust-data.oss-cn-hangzhou.aliyuncs.com//Production/20221116/6374a67af4076cbb144b3093/HP-30-V71-AC-005_1651471600_1651471609/front_left_camera/49301535644978001.jpg",
            "name": "front_left_camera",
            "height": 1080,
            "width": 1920,
            "camera": {
              "type": "PinHole",
              "heading": {
                "x": 0.2696730459030246,
                "y": -0.6540070045882386,
                "z": 0.65642704579091,
                "w": -0.262020647692359
              },
              "intrinsic": {
                "cx": 946.2857666015625,
                "cy": 495.1999206542969,
                "fx": 1308.9053955078125,
                "fy": 1308.5472412109375
              },
              "position": {
                "x": 0.923326570615037,
                "y": -1.5252789860746692,
                "z": -1.1927617866747138
              },
              "radial": {
                "k1": -0.4831980764865875,
                "k2": 0.2728261351585388,
                "k3": -0.08650419116020203
              },
              "tangential": {
                "p1": 0.0027712939772754908,
                "p2": 0.0008803523960523307
              },
              "skew": 0
            }
          }
        ]
      }
    ],
    "metadata": {
      "uniqueIdentifier": "83b4e71c-31fc-4ab9-9bdf-8639eaaa79af"
    }

```

:::

### Text Annotation

::: code-group

```json [Text]
{
  "attachmentType": "TEXT",
  "attachment": "https://torbjorn.oss-cn-hangzhou.aliyuncs.com/b7853399-5d21-46ae-82e4-b58ea4c29a4d.txt?OSSAccessKeyId=LTAI4GHWdWdjGDE4Gx1Efbyt&Expires=3134147966&Signature=1XR%2BFlznusHAklbPJEauEM7%2FJYw%3D",
  "metadata": {
    "uniqueIdentifier": "d600977d-4c0d-401a-9cc6-3577f095e495",
    "title": "test"
  }
}
```

:::

### Audio Annotation

::: code-group

```json [Audio]
{
  "attachmentType": "AUDIO",
  "attachment": "https://torbjorn.oss-cn-hangzhou.aliyuncs.com/%E8%AF%AD%E9%9F%B3%20005_sd.m4a",
  "metadata": {
    "uniqueIdentifier": "d600977d-4c0d-401a-9cc6-3577f095e495",
    "title": "test"
  }
}
```

:::

### Video Annotation

::: code-group

```json [Video]
{
  "attachmentType": "VIDEO",
  "attachment": "https://torbjorn.oss-cn-hangzhou.aliyuncs.com/%E8%AF%AD%E9%9F%B3%20005_sd.mp4",
  "metadata": {
    "uniqueIdentifier": "d600977d-4c0d-401a-9cc6-3577f095e495",
    "title": "test"
  }
}
```

:::

## Export

::: code-group

```json [Example]
{
  "annotations": [
    {
      "key": "string",
      "label": "string",
      "slots": [
        {
          "confidence": 0,
          "confirmed": true,
          "hintConfidence": "High",
          "hintStatus": "Unconfirmed",
          "id": "string",
          "label": "string",
          "length": 0,
          "source": "string",
          "start": 0,
          "text": "string",
          "type": "text"
        }
      ],
      "type": "slot"
    }
  ],
  "hints": [
    {
      "key": "string",
      "label": "string",
      "slots": [
        {
          "confidence": 0,
          "confirmed": true,
          "hintConfidence": "High",
          "hintStatus": "Unconfirmed",
          "id": "string",
          "label": "string",
          "length": 0,
          "source": "string",
          "start": 0,
          "text": "string",
          "type": "text"
        }
      ],
      "type": "slot"
    }
  ],
  "issues": [
    {
      "actions": [
        {
          "comments": ["string"],
          "createdAt": "string",
          "note": "string",
          "pool": {
            "id": 0,
            "name": "string",
            "operatorIDBlackList": ["string"],
            "rejectTaskCountDown": {
              "day": 0,
              "hour": 0,
              "minute": 0
            },
            "taskCountDown": {
              "day": 0,
              "hour": 0,
              "minute": 0
            },
            "type": 0
          },
          "taskId": 0,
          "team": {
            "id": 0,
            "name": "string"
          },
          "type": "Create",
          "user": {
            "id": 0,
            "name": "string",
            "phone": "string"
          }
        }
      ],
      "annotationPath": ["string"],
      "id": "string",
      "location": {
        "position": 0,
        "source": "string",
        "type": "text"
      },
      "timeFrame": 0,
      "type": 0
    }
  ],
  "metadata": {
    "imageRotateAngle": 0,
    "invalidFrame": [0],
    "noNeedToAnnotate": true
  },
  "notes": [
    {
      "createdAt": "string",
      "note": "string",
      "pool": {
        "id": 0,
        "name": "string",
        "operatorIDBlackList": ["string"],
        "rejectTaskCountDown": {
          "day": 0,
          "hour": 0,
          "minute": 0
        },
        "taskCountDown": {
          "day": 0,
          "hour": 0,
          "minute": 0
        },
        "type": 0
      },
      "taskId": 0,
      "team": {
        "id": 0,
        "name": "string"
      },
      "user": {
        "id": 0,
        "name": "string",
        "phone": "string"
      }
    }
  ]
}
```

:::

For more details about data structure, please visit our [SDK documentation page](https://sdk-docs.stardust.ai/overview.html).
