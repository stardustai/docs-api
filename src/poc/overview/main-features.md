---
title: 'Main Features'
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
| TASKS    | List task                   | /project/tasks          |
|          | Send annotation task        | /task/send              |
|          | Re-sending a callback       | /task/{taskId}/callback |
|          | Get task information        | /task/get               |
| EXPORT   | Export tasks with condition | /tasks/export           |

<br />

**Future works:**

> The following APIs are under development, will release soon.

- [ ] **Dataset**: Create, Config, View, Remove
- [ ] **DataEntry**: Upload, View, Modify, Remove
- [ ] **Models**: Create, Config, Monitor, Remove
- [ ] **Dispatch**: Send, Status, Review, Callback
