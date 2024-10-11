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
          { text: 'Response Codes', link: '/overview/response-codes' },
          { text: 'Data Structure', link: '/overview/data-structure' }
        ]
      },
      {
        text: 'PROJECTS',
        items: [
          getApiConfig('/projects/create-folder'),
          getApiConfig('/projects/create-project'),
          getApiConfig('/projects/list-project'),
          getApiConfig('/projects/get-project-info')
        ]
      },
      {
        text: 'DATASETS',
        items: [
          getApiConfig('/datasets/sync-upload'),
          getApiConfig('/datasets/async-import'),
          getApiConfig('/datasets/async-import-annotation'),
          getApiConfig('/datasets/sync-upload-annotation'),
          getApiConfig('/datasets/get-status')
        ]
      },
      {
        text: 'ANNOTATIONS',
        items: [
          getApiConfig('/annotations/create-workflow'),
          getApiConfig('/annotations/request-annotation'),
          getApiConfig('/annotations/run-stat')
        ]
      },
      {
        text: 'TASKS',
        items: [
          getApiConfig('/projects/list-task'),
          getApiConfig('/tasks/send-task'),
          {
            ...getApiConfig('/tasks/callbacks/'),
            items: [getApiConfig('/tasks/callbacks/re-sending')]
          },
          getApiConfig('/tasks/get-task')
        ]
      },
      {
        text: 'EXPORT',
        items: [getApiConfig('/export/export-tasks')]
      }
    ]
  }
})
