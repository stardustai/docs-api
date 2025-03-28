<template>
  <template v-for="[title, type, data] of [result]">
    <Params v-if="type === 'schema'" :title="title" :data="data" />
    <Example v-else :title="title" :data="data" />
  </template>
</template>

<script setup lang="ts">
import JSON5 from 'json5'
import { computed } from 'vue'
import Example from './Example.vue'
import Params from '../Request/Params/index.vue'

const props = defineProps<{
  data?: string | [string, string, Record<string, any>]
}>()

const result = computed<[string, string, Record<string, any>]>(() => {
  if (typeof props.data !== 'string') return props.data
  return JSON5.parse(decodeURIComponent(props.data))
})
</script>
