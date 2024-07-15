<template>
  <Wrapper :options="options" @change="handleSelect" @toggle="handleToggle">
    <div class="vp-doc">
      <div
        class="vp-code"
        v-html="md.render('```' + renderType + '\n' + codeSnippet + '\n```')"
      />
    </div>
  </Wrapper>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { CurlGenerator } from 'curl-generator'
import {
  toPythonHttp as toPython,
  toJavaOkHttp as toJava,
  toGo,
  toNodeAxios as toNode
} from 'curlconverter'
import Wrapper from './Wrapper.vue'
import { createMarkdownRenderer } from '../../../../utils'

const emit = defineEmits(['toggle'])

const props = defineProps<{
  data?: Record<string, Record<string, any>>
}>()

const type = ref('shell')
const { site, frontmatter } = useData()
const md = await createMarkdownRenderer()
const base = site.value.themeConfig.api?.base || ''
const authorization = site.value.themeConfig.api?.authorization || {}

const options = ['Shell', 'Python', 'Java', 'Go', 'NodeJS']

const handleSelect = (e) => {
  type.value = e.target.value?.toLowerCase()
}

const handleToggle = (e) => {
  emit('toggle', e.target.open)
}

const curlSnippet = computed(() => {
  const { path, query, body, headers } = props.data || {}
  const options = {
    url: `${base}${frontmatter.value.api?.url}`,
    headers: {
      'Content-Type': 'application/json',
      ...authorization,
      ...headers
    },
    method: frontmatter.value.api?.method,
    body: {}
  }
  if (path) {
    options.url = options.url.replace(
      /\{([^}]+)\}/g,
      ($1, key) => path[key] || $1
    )
  }
  if (query) {
    const queryStr = `${Object.entries(query)
      .filter(([, val]) => val !== undefined)
      .map(([key, val]) => `${key}=${val}`)
      .join('&')}`
    if (queryStr) options.url += `?${queryStr}`
  }
  options.body = body || undefined
  return CurlGenerator(options).replace(/\\$/, '')
})

const codeSnippet = computed(() => {
  const snippet = curlSnippet.value
  switch (type.value) {
    case 'python':
      return toPython(snippet)
    case 'java':
      return toJava(snippet)
    case 'go':
      return toGo(snippet)
    case 'nodejs':
      return toNode(snippet)
    default:
      return snippet
  }
})

const renderType = computed(() => {
  switch (type.value) {
    case 'nodejs':
      return 'javascript'
    default:
      return type.value
  }
})
</script>
