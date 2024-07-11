---
title: 'Get Task'
api:
  method: POST
  url: /task/get
---

::: params

```json [body]
{
  "projectId": {
    "type": "long",
    "description": "project id"
  },
  "taskId": {
    "type": "string",
    "description": "Task Id"
  }
}
```

:::

::: results

```json [responses]
{
  "200": {
    "code": 2000,
    "message": "Succeed",
    "data": {
      "taskId": "358183635595169792",
      "taskParams": {
        "record": {
          "attachmentType": "IMAGE",
          "attachment": "https://website.com/20230505_4_0f_白天_5301/jc08_suz_Ew_0f_sunny_m_0_1620205175288.jpg",
          "metadata": {
            "uniqueIdentifier": "6d231eae-a2ce-4f58-8cae-8843ce46a478"
          }
        },
        "operators": [
          {
            "key": "box2d-[e3030]",
            "label": "2dbox",
            "type": "slot",
            "metadata": {},
            "slotSpecification": {
              "type": "box2d",
              "sizeCheckSwitch": true,
              "restrictInsideCanvasBoundary": true,
              "topLeftMark": "1",
              "topRightMark": "2",
              "bottomRightMark": "3",
              "bottomLeftMark": "4"
            },
            "instanceOption": {}
          }
        ]
      },
      "pointData": null,
      "taskNoteDTOList": [],
      "result": {
        "annotations": [
          {
            "key": "box2d-[e3030]",
            "label": "2dbox",
            "type": "slot",
            "slots": [
              {
                "id": "c254a686-2595-4bc0-bdc1-1a300c61658c",
                "label": "2dbox",
                "userId": 167328,
                "teamId": 6358,
                "poolId": 16550,
                "type": "box2d",
                "plane": {
                  "topLeft": {
                    "x": 418.9325289451249,
                    "y": 93.22545156214404
                  },
                  "topRight": {
                    "x": 653.8228875451144,
                    "y": 93.22545156214404
                  },
                  "bottomRight": {
                    "x": 653.8228875451144,
                    "y": 305.3844851363282
                  },
                  "bottomLeft": {
                    "x": 418.9325289451249,
                    "y": 305.3844851363282
                  }
                }
              },
              {
                "id": "fc555437-c451-46c6-9bc5-548875e1f99f",
                "label": "2dbox",
                "userId": 167328,
                "teamId": 6358,
                "poolId": 16550,
                "type": "box2d",
                "plane": {
                  "topLeft": {
                    "x": 953.8763778857464,
                    "y": 188.69701667052692
                  },
                  "topRight": {
                    "x": 1220.5905915218636,
                    "y": 188.69701667052692
                  },
                  "bottomRight": {
                    "x": 1220.5905915218636,
                    "y": 417.52568859696834
                  },
                  "bottomLeft": {
                    "x": 953.8763778857464,
                    "y": 417.52568859696834
                  }
                }
              },
              {
                "id": "6edc64fb-e820-43f5-bf63-ca44edaeeee6",
                "label": "2dbox",
                "userId": 167328,
                "teamId": 6358,
                "poolId": 16550,
                "type": "box2d",
                "plane": {
                  "topLeft": {
                    "x": 1584.2917919347508,
                    "y": 384.18641189245375
                  },
                  "topRight": {
                    "x": 1754.019018794098,
                    "y": 384.18641189245375
                  },
                  "bottomRight": {
                    "x": 1754.019018794098,
                    "y": 629.6847221711525
                  },
                  "bottomLeft": {
                    "x": 1584.2917919347508,
                    "y": 629.6847221711525
                  }
                }
              }
            ]
          }
        ],
        "issues": [],
        "hints": [],
        "metadata": {
          "invalidFrame": [],
          "imageRotateAngle": null,
          "noNeedToAnnotate": null,
          "dataSource": null,
          "algorithmId": null,
          "pintCloudMapScope": null,
          "pointCount": null,
          "interpolateMethod": null
        }
      },
      "previousResult": {
        "annotations": [
          {
            "key": "box2d-[e3030]",
            "label": "2dbox",
            "type": "slot",
            "slots": [
              {
                "id": "c254a686-2595-4bc0-bdc1-1a300c61658c",
                "label": "2dbox",
                "userId": 167328,
                "teamId": 6358,
                "poolId": 16550,
                "type": "box2d",
                "plane": {
                  "topLeft": {
                    "x": 418.9325289451249,
                    "y": 93.22545156214404
                  },
                  "topRight": {
                    "x": 653.8228875451144,
                    "y": 93.22545156214404
                  },
                  "bottomRight": {
                    "x": 653.8228875451144,
                    "y": 305.3844851363282
                  },
                  "bottomLeft": {
                    "x": 418.9325289451249,
                    "y": 305.3844851363282
                  }
                }
              },
              {
                "id": "fc555437-c451-46c6-9bc5-548875e1f99f",
                "label": "2dbox",
                "userId": 167328,
                "teamId": 6358,
                "poolId": 16550,
                "type": "box2d",
                "plane": {
                  "topLeft": {
                    "x": 953.8763778857464,
                    "y": 188.69701667052692
                  },
                  "topRight": {
                    "x": 1220.5905915218636,
                    "y": 188.69701667052692
                  },
                  "bottomRight": {
                    "x": 1220.5905915218636,
                    "y": 417.52568859696834
                  },
                  "bottomLeft": {
                    "x": 953.8763778857464,
                    "y": 417.52568859696834
                  }
                }
              },
              {
                "id": "6edc64fb-e820-43f5-bf63-ca44edaeeee6",
                "label": "2dbox",
                "userId": 167328,
                "teamId": 6358,
                "poolId": 16550,
                "type": "box2d",
                "plane": {
                  "topLeft": {
                    "x": 1584.2917919347508,
                    "y": 384.18641189245375
                  },
                  "topRight": {
                    "x": 1754.019018794098,
                    "y": 384.18641189245375
                  },
                  "bottomRight": {
                    "x": 1754.019018794098,
                    "y": 629.6847221711525
                  },
                  "bottomLeft": {
                    "x": 1584.2917919347508,
                    "y": 629.6847221711525
                  }
                }
              }
            ]
          }
        ],
        "issues": [],
        "hints": [],
        "metadata": {
          "invalidFrame": [],
          "imageRotateAngle": null,
          "noNeedToAnnotate": null,
          "dataSource": null,
          "algorithmId": null,
          "pintCloudMapScope": null,
          "pointCount": null,
          "interpolateMethod": null
        }
      },
      "appendInfo": {
        "poolInfo": {
          "poolId": 16555,
          "poolType": 5,
          "operatorIdBlackList": [],
          "reverseType": null,
          "isTimeSequence": false
        },
        "projectInfo": {
          "projectId": 3184,
          "projectName": "测试-下",
          "tutorial": null
        },
        "projectIssueShortCut": [],
        "projectAlgorithm": [],
        "isNeedQualityCheck": null,
        "samplePackageId": null,
        "sampleInfo": null,
        "previousPointDataOssUrl": null,
        "updateTime": "2024-05-17 14:28:05"
      },
      "status": 9,
      "qualityStatus": null,
      "taskDeadline": null,
      "rejectDeadline": null,
      "serverTime": "2024-05-17 17:22:21",
      "qualityMessages": [],
      "errorMessage": {
        "pointErrorMsgs": null,
        "isPointTimeOut": null
      },
      "workerInfo": null,
      "issueTransferConfigs": [],
      "instancePropertyShortcutMappingList": null
    },
    "date": "2024-05-17 17:22:21",
    "requestId": "c597b2ac171593779390810011afb4",
    "success": true
  },
  "400": {
    "code": 400,
    "data": null,
    "date": "",
    "message": "Invalid Parameter",
    "requestId": "",
    "success": false
  }
}
```

:::
