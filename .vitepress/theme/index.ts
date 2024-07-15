// https://vitepress.dev/guide/custom-theme
import { withBase } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Glossary from './components/Glossary.vue'
import { redirectRouteMap } from '../config/routes.mts'
import Layout from './components/Layout.vue'
import API from './components/Api/index.vue'
import APIRequest from './components/Api/Request/index.vue'
import APIResults from './components/Api/Results.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('API', API)
    app.component('ApiRequest', APIRequest)
    app.component('ApiResults', APIResults)
    app.component('Glossary', Glossary)

    if (import.meta.env.SSR) return

    const redirectTo = (path: string) => {
      const { search, hash } = location
      const target = withBase(`${path}${search}${hash}`)
      router.go(target), location.replace(target)
    }

    const pathname = location.pathname.replace(/\/$/g, '')
    if (redirectRouteMap[pathname]) {
      redirectTo(redirectRouteMap[pathname])
    } else if (pathname.startsWith('/en/')) {
      redirectTo(pathname.replace('/en/', '/'))
    }
  }
} satisfies Theme
