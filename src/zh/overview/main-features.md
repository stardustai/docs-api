---
title: '核心功能'
slug: 'main-features'
description: ''
hidden: false
createdAt: 'Fri May 17 2024 07:44:52 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Fri May 17 2024 16:39:40 GMT+0000 (Coordinated Universal Time)'
---

You can connect existing user systems with Stardust products to implement secure user authentication through the openAuth protocol and support synchronization of user permissions and other information.

Manage your annotation projects through APIs, support creation and configuration of projects, and query project information.

Manage your annotation tasks through APIs, support importing data to generate tasks, return task execution information, and query task information.

Export annotation data to the path you need, and support data export selection through different dimensions such as tasks and time.

| Modules  | Features                    | endpoint                |
| :------- | :-------------------------- | :---------------------- |
| PROJECTS | Create project              | /project/create         |
|          | List project                | /project/list           |
|          | Get project information     | /project/get            |
|          | List task                   | /project/listTask       |
| TASKS    | Send annotation task        | /task/send              |
|          | Re-sending a callback       | /task/{taskId}/callback |
|          | Get task information        | /task/{taskId}          |
| EXPORT   | Export tasks with condition | /export/tasks           |

<br />

**Future works:**

> The following APIs are under development, will release soon.

- [ ] **Dataset**: Create, Config, View, Remove
- [ ] **DataEntry**: Upload, View, Modify, Remove
- [ ] **Models**: Create, Config, Monitor, Remove
- [ ] **Dispatch**: Send, Status, Review, Callback
