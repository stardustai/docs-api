import { ContentData, createContentLoader, defineConfig } from 'vitepress'
import { getApiTitle } from '../shared.mts'

const docs = await createContentLoader('**/*.md').load()

const docsMap = docs.reduce(
  (map, doc) => map.set(doc.url, doc),
  new Map<string, ContentData>()
)

const VERSION = 'latest'
const getVersionLink = (link: string) => link

const getApiConfig = (link: string) => {
  const vlink = getVersionLink(link)
  const frontmatter = docsMap.get(`/${VERSION}${link}`)?.frontmatter
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
      { text: 'API', link: getVersionLink('/folder/create-folder') }
    ],

    sidebar: [
      {
        text: 'OVERVIEW',
        items: [
          // {
          //   text: 'Main Features',
          //   link: getVersionLink('/overview/main-features')
          // },
          // {
          //   text: 'Design Concepts',
          //   link: getVersionLink('/overview/design-concepts')
          // },
          // {
          //   text: 'Authentication',
          //   link: getVersionLink('/overview/authentication')
          // },
          {
            text: 'Response Codes',
            link: getVersionLink('/overview/response-codes')
          }
          // ,
          // {
          //   text: 'Data Structure',
          //   link: getVersionLink('/overview/data-structure')
          // }
        ]
      },
      {
        text: 'FOLDER',
        items: [
          getApiConfig('/folder/create-folder'),
          getApiConfig('/folder/get-folder'),
          getApiConfig('/folder/update-folder'),
          getApiConfig('/folder/get-all-folder')
        ]
      },
      {
        text: 'CAMPAIGN',
        items: [
          getApiConfig('/campaign/create-campaign'),
          getApiConfig('/campaign/query-campaign')
        ]
      },
      {
        text: 'WORKFLOW',
        items: [
          getApiConfig('/workflow/add-workforce'),
          getApiConfig('/workflow/create-workflow-template'),
          getApiConfig('/workflow/get-workflow-template')
        ]
      },
      {
        text: 'ANNOTATIONS',
        items: [
          getApiConfig('/annotations/create-annotation-request'),
          getApiConfig('/annotations/get-annotation-request'),
          getApiConfig('/annotations/get-task-schedule')
        ]
      },
      {
        text: 'TASK',
        items: [getApiConfig('/task/get-task')]
      },
      {
        text: 'TAXONOMY',
        items: [getApiConfig('/taxonomy/create-taxonomy')]
      },
      {
        text: 'STATISTICS',
        items: [
          getApiConfig('/statistics/get-statistics'),
          getApiConfig('/statistics/get-statistics-record'),
          getApiConfig('/statistics/get-frames'),
          getApiConfig('/statistics/get-rank-labelers'),
          getApiConfig('/statistics/get-worker-effciency')
        ]
      },
      {
        text: 'SAMPLE',
        items: [
          getApiConfig('/sample/create-sampling'),
          getApiConfig('/sample/get-sampling-accuracy')
        ]
      }
      // ,
      // {
      //   text: 'INCIDENT',
      //   items: [
      //     getApiConfig('/incident/get-past-incidents'),
      //     getApiConfig('/incident/get-system-status')
      //   ]
      // }
    ]
  }
})
