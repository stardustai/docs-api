---
title: 'Export Task'
description: 'Export all data of the task, include annotation results, metadata, assets, etc.'
api:
  method: POST
  url: /tasks/export
---

<Params
  :body="body"
  :results="results"
/>

<script setup>
const body = {
  projectId: {
    type: 'long',
    description: 'project id'
  },
  completeTimeAfter: {
    type: 'string',
    description: 'Complete time of task after the date, include the day, such as 2024-05-01'
  },
  completeTimeBefore: {
    type: 'string',
    description: 'Complete time of task before the date, such as 2024-06-01'
  },
  taskIds: {
    type: 'long[]',
    description: 'Task Id List'
  },
}
const results = {
  200: {
    "code": 200,
    "message": "Success",
    "data": {
      "annotationResultList": [
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
                  "comments": [
                    "string"
                  ],
                  "createdAt": "string",
                  "note": "string",
                  "pool": {
                    "id": 0,
                    "name": "string",
                    "operatorIDBlackList": [
                      "string"
                    ],
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
              "annotationPath": [
                "string"
              ],
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
            "invalidFrame": [
              0
            ],
            "noNeedToAnnotate": true
          },
          "notes": [
            {
              "createdAt": "string",
              "note": "string",
              "pool": {
                "id": 0,
                "name": "string",
                "operatorIDBlackList": [
                  "string"
                ],
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
      ]
    },
    "date": "2024-05-17 17:45:50",
    "requestId": "77bdf4cd171593981208210031afb4",
    "success": true
  },
  400: {
    "code": 400,
    "data": null,
    "date": "",
    "message": "Invalid Parameter",
    "requestId": "77bdf4cd171593981208210031afbv",
    "success": false
  }
}
</script>
