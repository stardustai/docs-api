// https://vitepress.dev/guide/custom-theme
import { withBase } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import API from './components/API/index.vue'
import Glossary from './components/Glossary.vue'
import { redirectRouteMap } from '../config/routes.mts'
import Layout from './components/Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('API', API)
    app.component('Glossary', Glossary)

    if (import.meta.env.SSR) return

    const pathname = location.pathname.replace(/^\/|\/$/g, '')
    if (redirectRouteMap[pathname]) {
      const target = withBase(`/${redirectRouteMap[pathname]}`)
      router.go(target), location.replace(target)
    }
  }
} satisfies Theme
