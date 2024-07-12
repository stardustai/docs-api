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
import { toPython, toJava, toGo, toNode } from 'curlconverter'
import Wrapper from './Wrapper.vue'
import { createMarkdownRenderer } from '../../../utils'

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
  const options = {
    url: `${base}${frontmatter.value.api?.url}`,
    headers: {
      'Content-Type': 'application/json',
      ...authorization
    },
    method: frontmatter.value.api?.method,
    body: {}
  }
  const { path, query, body } = props.data || {}
  if (path) {
    options.url = options.url.replace(
      /\{([^}]+)\}/g,
      ($1, key) => path[key] || $1
    )
  }
  if (query) {
    options.url += `?${Object.entries(query)
      .map(([key, val]) => `${key}=${val}`)
      .join('&')}`
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
