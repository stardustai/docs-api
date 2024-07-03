<template>
  <div>
    <h2>
      {{ method }} <span class="text-sm">{{ base }}{{ url }}</span>
    </h2>
    <div>
      <List title="METADATA" :data="query" />
      <List title="BODY PARAMS" :data="body" />

      <Result title="RESPONSES" :data="results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import List, { Data } from './List.vue'
import Result from './Result.vue'

defineProps<{
  method: string
  url: string
  body?: Record<string, Data>
  query?: Record<string, Data>
  results?: Record<string, any>
}>()

const base = 'https://portal-prod.rosettalab.top/rosetta-open'
</script>
