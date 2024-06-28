---
title: "Callbacks"
slug: "callback"
description: ""
hidden: false
createdAt: "Fri May 17 2024 15:20:48 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri May 17 2024 16:36:39 GMT+0000 (Coordinated Universal Time)"
---

```json Example Callback Body
{
  "attachmentType": "IMAGE",
  "attachment": "oss://stardust-data/Production/xingchen_12_4119_city/20231110_1camera_1_4119/jc08_suz_Ew_0b_sunny_m_0_1699577442197.jpg",
  "metadata": {
    "uniqueIdentifier": "329345877854392320", // Task object ID in your platform
    "additionalInfo":{
      "callbackUrl": "http://www.example.com/callback"
      // You can list any other parameter below
    }
  }
}
```

On your tasks, you can optionally supply a callbackUrl, a fully qualified URL that we will POST with the results of the task when completed. The data will be served as a JSON body (application/json).

You should respond to the POST request with a 2xx status code. If we do not receive a 2xx status code, we will continue to retry up to 8 times over the course of the next 24 hours.

If we receive a 2xx status code, the task will be populated with a true value for the callback_succeeded parameter. Otherwise, if we do not receive a 2xx status code on any retry, the task will be populated with a false value for the callback_succeeded parameter.

## Authentication

If you'd like to authenticate our callbacks, we set a X-STARDUST-KEY HTTP header on each of our callbacks. The value will be equal to your [AccessKey ID](/overview/authentication) from our platform. If this header is not set, or it is set incorrectly, the callback is not from Stardust.

## POST Data

| Property | Type   | Description                                                                                                                                                       |
| :------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| taskId   | string | The taskId is the unique identifier for the task. It is identical to task.taskId                                                                                  |
| status   | string | The status of the task when it was completed. Normally completed, but can also be error in the case that a task failed to process. It is identical to task.status |
| task     | object | The [full Task Object](/en/tasks/get-task) for reference and convenience, include annotations                                                                    |

## Events that trigger a Callback

Callbacks are sent for the following events:

- Error on Task Creation (see Errors for more details)
- Task Completion
- Audit Status Changes (Approved, Rejected, Fixed)
