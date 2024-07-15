<template>
  <div v-if="results">
    <h3 class="text-xs font-semibold uppercase">{{ title }}</h3>
    <div
      class="bg-[var(--vp-sidebar-bg-color)] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4"
    >
      <div v-for="[code, item] of Object.entries(results)">
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
import { computed } from 'vue'
import classnames from 'classnames'
import { useData } from 'vitepress'
import VueJsonPretty from 'vue-json-pretty'

const props = defineProps<{
  title: string
  data?: string | Record<string, any>
}>()

const { isDark } = useData()

const results = computed<Record<string, any>>(() => {
  if (typeof props.data !== 'string') return props.data
  return JSON.parse(decodeURIComponent(props.data))
})
</script>

<style>
@import url('vue-json-pretty/lib/styles.css');
</style>
