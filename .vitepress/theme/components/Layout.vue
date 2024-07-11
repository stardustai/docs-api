<template>
  <Layout>
    <template #doc-before>
      <DocInfo />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DocInfo from './DocInfo/index.vue'

const { isDark } = useData()
const { Layout } = DefaultTheme

if (!import.meta.env.SSR) {
  watch(
    isDark,
    (val) => {
      const theme = val ? 'dark' : 'light'
      const elem = document.documentElement
      elem.setAttribute('data-theme', theme)
    },
    {
      immediate: true
    }
  )
}
</script>
