<template>
  <div>
    <Request :data="request" />
    <Result :data="result" />
  </div>
</template>

<script setup lang="ts">
import Request from './Request/index.vue'
import Result from './Result/index.vue'
import type { Data } from '../../types'

defineProps<{
  request?: string | [string, string, Record<string, Data>][]
  result?: string | [string, string, Record<string, any>]
}>()
</script>
