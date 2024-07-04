<template>
  <div>
    <div class="flex items-center">
      <span
        :class="
          classNames(
            'text-[8px] w-9 h-4 leading-4 rounded-xl text-white text-center',
            {
              'bg-[#0e9b71]': method === 'GET',
              'bg-[#0171c2]': method === 'POST'
            }
          )
        "
        >{{ method }}</span
      >
      <span class="text-sm ml-1">{{ base }}{{ url }}</span>
    </div>
    <div class="mt-8 pt-8 border-t border-solid dark:border-[#2e2e32]">
      <List title="METADATA" :data="query" />
      <List title="BODY PARAMS" :data="body" />
      <List title="PATH PARAMS" :data="path" />
      <Result title="RESPONSES" :data="results" />
    </div>
  </div>
</template>

<script setup lang="ts">
import classNames from 'classnames'
import List, { Data } from './List.vue'
import Result from './Result.vue'

defineProps<{
  method: string
  url: string
  body?: Record<string, Data>
  path?: Record<string, Data>
  query?: Record<string, Data>
  results?: Record<string, any>
}>()

const base = 'https://portal-prod.rosettalab.top/rosetta-open'
</script>
