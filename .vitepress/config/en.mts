import { ContentData, createContentLoader, defineConfig } from 'vitepress'
import { getApiTitle } from './shared.mts'

const docs = await createContentLoader('**/*.md').load()

const docsMap = docs.reduce(
  (map, doc) => map.set(doc.url, doc),
  new Map<string, ContentData>()
)

const getApiConfig = (link: string) => {
  const frontmatter = docsMap.get(`/en${link}`)?.frontmatter
  if (!frontmatter || !frontmatter.api?.method) {
    return { text: frontmatter?.title || link, link }
  }
  return {
    text: getApiTitle(frontmatter.title, frontmatter.api.method),
    link
  }
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
          {
            text: 'Design Concepts',
            link: '/overview/design-concepts'
          },
          {
            text: 'Authentication',
            link: '/overview/authentication'
          },
          { text: 'Errors', link: '/overview/errors' },
          { text: 'Data Structure', link: '/overview/data-structure' }
        ]
      },
      {
        text: 'PROJECTS',
        items: [
          getApiConfig('/projects/create-project'),
          getApiConfig('/projects/list-project/'),
          getApiConfig('/projects/get-project-info')
        ]
      },
      {
        text: 'TASKS',
        items: [
          getApiConfig('/projects/list-task/'),
          getApiConfig('/tasks/send-task/'),
          {
            ...getApiConfig('/tasks/callbacks/'),
            items: [getApiConfig('/tasks/callbacks/re-sending')]
          },
          getApiConfig('/tasks/get-task/')
        ]
      },
      {
        text: 'EXPORT',
        items: [getApiConfig('/export/export-tasks')]
      }
    ]
  }
})
