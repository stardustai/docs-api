import { defineConfig } from 'vitepress'
import { getApiTitle } from './shared.mts'

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
            text: getApiTitle('Create Project', 'POST'),
            link: '/projects/create-project'
          },
          {
            text: getApiTitle('List Project', 'POST'),
            link: '/projects/list-project/'
          },
          {
            text: getApiTitle('Get Project', 'GET'),
            link: '/projects/get-project-info'
          }
        ]
      },
      {
        text: 'TASKS',
        items: [
          {
            text: getApiTitle('List Task', 'GET'),
            link: '/tasks/list-task/'
          },
          {
            text: getApiTitle('Send Tasks', 'POST'),
            link: '/tasks/send-task/'
          },
          {
            text: getApiTitle('Check Send Status', 'POST'),
            link: '/tasks/check-send-status/'
          },
          {
            text: 'Callbacks',
            link: '/tasks/callbacks/',
            items: [
              {
                text: getApiTitle('Re-sending a Callback', 'POST'),
                link: '/tasks/callbacks/re-sending'
              }
            ]
          },
          {
            text: getApiTitle('Get Task', 'GET'),
            link: '/tasks/get-task/'
          }
        ]
      },
      {
        text: 'EXPORT',
        items: [
          {
            text: getApiTitle('Export Tasks', 'POST'),
            link: '/export/export-tasks'
          }
        ]
      }
    ]
  }
})
