// https://vitepress.dev/guide/custom-theme
import { withBase } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Params from './components/Params/index.vue'
import Glossary from './components/Glossary.vue'
import { redirectRouteMap } from '../config/routes.mts'
import Layout from './components/Layout.vue'
import APIParams from './components/Params/List.vue'
import APIResults from './components/Params/Result.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('Params', Params)
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
