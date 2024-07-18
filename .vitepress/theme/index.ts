// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Glossary from './components/Glossary.vue'
import Layout from './components/Layout.vue'
import API from './components/Api/index.vue'
import APIRequest from './components/Api/Request/index.vue'
import APIResults from './components/Api/Response/Results.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('API', API)
    app.component('ApiRequest', APIRequest)
    app.component('ApiResults', APIResults)
    app.component('Glossary', Glossary)
  }
} satisfies Theme
