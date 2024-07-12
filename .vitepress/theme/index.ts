// https://vitepress.dev/guide/custom-theme
import { withBase } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Glossary from './components/Glossary.vue'
import { redirectRouteMap } from '../config/routes.mts'
import Layout from './components/Layout.vue'
import API from './components/Api/index.vue'
import APIResults from './components/Api/Results.vue'
import APIParams from './components/Api/Params/index.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('API', API)
    app.component('Glossary', Glossary)
    app.component('ApiParams', APIParams)
    app.component('ApiResults', APIResults)

    if (import.meta.env.SSR) return

    const pathname = location.pathname.replace(/^\/|\/$/g, '')
    if (redirectRouteMap[pathname]) {
      const target = withBase(`/${redirectRouteMap[pathname]}`)
      router.go(target), location.replace(target)
    }
  }
} satisfies Theme
