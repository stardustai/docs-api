<template>
  <div class="mt-8 pt-8 border-t border-solid dark:border-[#2e2e32]">
    <List title="METADATA" :data="query" />
    <List title="BODY PARAMS" :data="body" />
    <List title="PATH PARAMS" :data="path" />
    <Result title="RESPONSES" :data="results" />
  </div>
</template>

<script setup lang="ts">
import List from './List.vue'
import type { Data } from './List.vue'
import Result from './Result.vue'

defineProps<{
  body?: Record<string, Data>
  path?: Record<string, Data>
  query?: Record<string, Data>
  results?: Record<string, any>
}>()
</script>
