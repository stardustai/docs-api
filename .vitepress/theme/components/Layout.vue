<template>
  <Layout>
    <template #doc-before>
      <DocInfo />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DocInfo from './DocInfo.vue'
import { watch } from 'vue'

const { isDark } = useData()
const { Layout } = DefaultTheme

watch(isDark, (val) => {
  document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
})
</script>
