<template>
  <div v-if="data">
    <div class="text-xs font-semibold">{{ title }}</div>
    <div
      class="bg-gray-100 dark:bg-[#161618] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4 px-2.5"
    >
      <div
        v-for="([key, item], index) of Object.entries(data)"
        :class="
          classnames('py-2.5', {
            'border-t border-solid border-gray-300 dark:border-[#2e2e32] ':
              index !== 0
          })
        "
      >
        <div class="flex items-center -mt-1">
          <span>{{ key }}</span>
          <span class="ml-2 text-xs text-gray-500">{{ item.type }}</span>
          <span v-if="item.default" class="ml-2 text-xs text-gray-500"
            >Defaults to {{ item.default }}</span
          >
        </div>
        <div class="text-xs mt-1">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from 'classnames'

export interface Data {
  type: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'null'
  description?: string
  required?: boolean
  default?: string
}

defineProps<{
  title: string
  data?: Record<string, Data>
}>()
</script>
