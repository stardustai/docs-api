import { defineConfig } from 'vitepress'

const getApiTitle = (title: string, method: 'GET' | 'POST') => {
  const bg = method === 'GET' ? 'bg-[#0e9b71]' : 'bg-[#0171c2]'
  return `
<span class="flex justify-between items-center">
	<span>${title}</span>
	<span class="text-[8px] w-9 h-4 rounded-xl text-white text-center leading-4 ${bg}">${method}</span>
</span>`
}

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
