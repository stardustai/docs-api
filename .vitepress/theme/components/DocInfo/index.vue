<template>
  <div>
    <div class="flex items-baseline min-h-14">
      <div class="vp-doc">
        <h1 v-html="md.renderInline(page.title)" />
      </div>

      <Versions />
    </div>

    <div v-if="api" class="flex items-center">
      <Badge :method="api.method" />
      <span class="text-sm ml-1">{{ base }}{{ api.url }}</span>
    </div>

    <div class="vp-doc">
      <p v-html="md.renderInline(page.description)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import markdownit from 'markdown-it'
import Versions from './Versions.vue'
import Badge from './Badge.vue'

const md = markdownit({
  html: true
})

const { page, frontmatter } = useData()

const base = 'https://portal-prod.rosettalab.top/rosetta-open'
const api = computed(() => frontmatter.value.api)
</script>
