<template>
  <div v-if="data">
    <div class="text-xs font-semibold">{{ title }}</div>
    <div
      class="bg-gray-100 dark:bg-[#161618] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4"
    >
      <div v-for="[code, item] of Object.entries(data)">
        <div
          class="bg-gray-200 dark:bg-[#161618] px-2 flex items-center text-sm"
        >
          <div
            :class="
              classnames(
                'w-2 h-2 rounded-full mr-1',
                code.startsWith('2') ? 'bg-green-500' : 'bg-red-500'
              )
            "
          />
          {{ code }}
        </div>
        <div class="p-2 max-h-[500px] overflow-auto">
          <ClientOnly>
            <vue-json-pretty
              showIcon
              :data="item"
              :theme="isDark ? 'dark' : 'light'"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import { useData } from 'vitepress'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { Data } from './List.vue'

defineProps<{
  title: string
  data?: Record<string, Data>
}>()

const { isDark } = useData()
</script>
