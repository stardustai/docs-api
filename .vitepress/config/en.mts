import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/projects/create-project' }
    ],

    sidebar: [
      {
        text: 'OVERVIEW',
        items: [
          {
            text: 'Main Features',
            link: '/overview/main-features'
          },
          { text: 'Design Concepts', link: '/overview/design-concepts' },
          { text: 'Authentication', link: '/overview/authentication' },
          { text: 'Errors', link: '/overview/errors' },
          { text: 'Data Structure', link: '/overview/data-structure' }
        ]
      },
      {
        text: 'PROJECTS',
        items: [
          {
            text: 'Create Project',
            link: '/projects/create-project'
          },
          {
            text: 'List Project',
            link: '/projects/list-project'
          },
          {
            text: 'Get Project',
            link: '/projects/get-project-info'
          }
        ]
      },
      {
        text: 'TASKS',
        items: [
          {
            text: 'List Task',
            link: '/tasks/list-task'
          },
          {
            text: 'Send Tasks',
            link: '/tasks/send-task'
          },
          {
            text: 'Check Send Status',
            link: '/tasks/check-send-status'
          },
          {
            text: 'Callbacks',
            link: '/tasks/callbacks',
            items: [
              {
                text: 'Re-sending a Callback',
                link: '/tasks/callbacks/re-sending'
              }
            ]
          },
          {
            text: 'Get Task',
            link: '/tasks/get-task'
          }
        ]
      },
      {
        text: 'EXPORT',
        items: [
          {
            text: 'Export Tasks',
            link: '/export/export-tasks'
          }
        ]
      }
    ]
  }
})
