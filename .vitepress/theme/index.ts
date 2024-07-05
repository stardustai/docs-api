// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import API from './components/API/index.vue'
import DocInfo from './components/DocInfo.vue'
import Glossary from './components/Glossary.vue'
import { redirectRouteMap } from '../config/routes.mts'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DocInfo)
    }),
  enhanceApp({ app, router }) {
    app.component('API', API)
    app.component('Glossary', Glossary)

    if (import.meta.env.SSR) return

    const pathname = location.pathname.replace(/^\/|\/$/g, '')
    if (redirectRouteMap[pathname]) {
      router.go(redirectRouteMap[pathname])
    }
  }
} satisfies Theme
