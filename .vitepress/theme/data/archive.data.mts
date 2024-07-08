import { createContentLoader } from 'vitepress'

export interface Data {
  url: string
}

declare const data: Data[]

export { data }

export default createContentLoader('*/archive/**/*.md')
