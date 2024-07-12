<template>
  <div v-if="result">
    <h3 class="text-xs font-semibold uppercase">{{ title }}</h3>
    <div
      class="bg-gray-100 dark:bg-[#161618] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4 px-3"
    >
      <div
        v-for="([key, item], index) of Object.entries(result)"
        :class="
          classnames('py-2.5', {
            'border-t border-solid border-gray-300 dark:border-[#2e2e32] ':
              index !== 0
          })
        "
      >
        <div class="flex items-baseline">
          <span
            v-if="item.required !== false"
            class="text-red-500 absolute -ml-1.5 mt-0.5 text-xs"
            >*</span
          >
          <span>{{ key }}</span>
          <span class="ml-2 text-xs text-gray-500">{{ item.type }}</span>
          <span v-if="item.default" class="ml-2 text-xs text-gray-500"
            >Defaults to {{ item.default }}</span
          >
        </div>
        <div v-if="item.description" class="text-xs mt-1">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import { computed } from 'vue'

export interface Data {
  type: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'null'
  description?: string
  required?: boolean
  default?: string
}

const props = defineProps<{
  title: string
  data?: string | Record<string, Data>
}>()

const result = computed(() => {
  if (typeof props.data !== 'string') return props.data
  return JSON.parse(decodeURIComponent(props.data))
})
</script>
