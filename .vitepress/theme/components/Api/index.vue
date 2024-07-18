<template>
  <div>
    <Params title="Query PARAMS" :data="query" />
    <Params title="BODY PARAMS" :data="body" />
    <Params title="PATH PARAMS" :data="path" />

    <Request :data="request" />

    <Results title="RESPONSES" :data="results" />
  </div>
</template>

<script setup lang="ts">
import Request from './Request/index.vue'
import Params from './Request/Params/index.vue'
import Results from './Response/Results.vue'
import type { Data } from '../../types'

defineProps<{
  body?: Record<string, Data>
  path?: Record<string, Data>
  query?: Record<string, Data>
  request?: string | [string, string, Record<string, Data>][]
  results?: Record<string, any>
}>()
</script>
