import { ContentData, createContentLoader, defineConfig } from 'vitepress'
import { getApiTitle } from '../shared.mts'

const docs = await createContentLoader('**/*.md').load()

const docsMap = docs.reduce(
  (map, doc) => map.set(doc.url, doc),
  new Map<string, ContentData>()
)

const getVersionLink = (link: string) => {
  return `/latest${link}`
}

const getApiConfig = (link: string) => {
  const vlink = getVersionLink(link)
  const frontmatter = docsMap.get(vlink)?.frontmatter
  if (!frontmatter || !frontmatter.api?.method) {
    return { text: frontmatter?.title || link, link: vlink }
  }
  return {
    text: getApiTitle(frontmatter.title, frontmatter.api.method),
    link: vlink
  }
}

export const config_latest = defineConfig({
  lang: 'en-US',

  themeConfig: {
    nav: [
      { text: 'Home', link: getVersionLink('/') },
      { text: 'API', link: getVersionLink('/projects/create-project') }
    ],

    sidebar: [
      {
        text: 'OVERVIEW',
        items: [
          {
            text: 'Main Features',
            link: getVersionLink('/overview/main-features')
          },
          {
            text: 'Design Concepts',
            link: getVersionLink('/overview/design-concepts')
          },
          {
            text: 'Authentication',
            link: getVersionLink('/overview/authentication')
          },
          {
            text: 'Response Codes',
            link: getVersionLink('/overview/response-codes')
          },
          {
            text: 'Data Structure',
            link: getVersionLink('/overview/data-structure')
          }
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
