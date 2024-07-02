import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { en } from './en.mts'
import { zh } from './zh.mts'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  ...shared,
  locales: isDev
    ? {
        root: { label: 'English', ...en },
        zh: { label: '简体中文', ...zh }
      }
    : {
        root: { label: 'English', ...en }
      }
})
