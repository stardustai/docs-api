export default {
  paths() {
    return [
      { params: { path: 'export-tasks', to: 'export/export-tasks' } },
      { params: { path: 'callback', to: 'tasks/callbacks' } },
      { params: { path: 'list-task', to: 'tasks/list-task' } },
      { params: { path: 'send-task', to: 'tasks/send-task' } },
      { params: { path: 'data-structure', to: 'overview/data-structure' } },
      { params: { path: 'authentication', to: 'overview/authentication' } },
      { params: { path: 'create-project', to: 'projects/create-project' } }
    ]
  }
}
