import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { en } from './en.mts'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en }
  }
})
