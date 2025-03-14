---
title: 'Main Features'
---

You can connect existing user systems with Stardust products to implement secure user authentication through the
openAuth protocol and support synchronization of user permissions and other information.

Manage your annotation projects through APIs, support creation and configuration of projects, and query project
information.

Manage your annotation tasks through APIs, support importing data to generate tasks, return task execution information,
and query task information.

Export annotation data to the path you need, and support data export selection through different dimensions such as
tasks and time.

| Modules     | Features                  | endpoint                   |
| :---------- | :------------------------ | :------------------------- |
| FOLDER      | Create Folder             | /folder/create             |
|             | Get Folder                | /folder/${helixProjectId}  |
| CAMPAIGN    | Create Campaign           | /campaign/create           |
| ANNOTATIONS | Create Annotation Request | /annotation-request (POST) |
|             | Get Annotation Request    | /annotation-request (GET)  |

<br />

**Future works:**

> The following APIs are under development, will release soon.

- [ ] **Export**: JSONL export, OpenLabel export
- [ ] **Task**: Get
- [ ] **Workflow**: Create, Config, Monitor, Remove
- [ ] **Statistics**: Statistics
