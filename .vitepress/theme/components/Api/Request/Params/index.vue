<template>
  <div v-if="params">
    <h3 class="text-xs font-semibold uppercase">
      {{ title }}
      <span v-if="type" class="opacity-60 ml-0.5">[{{ type }}]</span>
    </h3>
    <div
      class="bg-[var(--vp-sidebar-bg-color)] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4 px-3"
    >
      <div
        v-for="([key, item], index) of Object.entries(params)"
        :class="
          classnames('py-2.5', {
            'border-t border-solid border-gray-300 dark:border-[#2e2e32] ':
              index !== 0
          })
        "
      >
        <div class="flex justify-between">
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
          <Input
            :type="item.type"
            :value="item.default"
            :class="
              classnames(
                'transition-opacity',
                input ? 'opacity-100' : 'opacity-0'
              )
            "
            @change="(val) => handleChange(key, val)"
          />
        </div>
        <div
          v-if="item.description"
          class="text-xs mt-1"
          v-html="md.renderInline(item.description)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import { computed, reactive } from 'vue'
import Input from './Input.vue'
import markdownit from 'markdown-it'
import type { Data } from '../../../../types'

const md = markdownit({
  html: true
})

const emit = defineEmits<{
  (e: 'change', value?: Record<string, any>): void
}>()

const props = defineProps<{
  title: string
  data?: string | Record<string, Data>
  input?: boolean
  type?: 'form' | 'json'
}>()

const params = computed<Record<string, Data>>(() => {
  if (typeof props.data !== 'string') return props.data
  return JSON.parse(decodeURIComponent(props.data))
})

const getDefaultValue = (data: Data) => {
  if (data.type !== 'file' || !data.default) {
    return data.default
  }
  return {
    type: 'file',
    fileName: data.default
  }
}

const formData = reactive(
  Object.entries(params.value || {}).reduce((rst, [key, val]) => {
    return { ...rst, [key]: getDefaultValue(val) }
  }, {})
)

const handleEmitData = (value) => {
  const content = Object.entries(value).reduce((rst, [key, val]) => {
    if (val === undefined) return rst
    return { ...rst, [key]: val }
  }, {})
  if (!Object.keys(content).length) {
    emit('change', undefined)
    return
  }
  if (props.type !== 'form') {
    emit('change', content)
    return
  }
  Object.entries(value).forEach(([key, val]) => {
    if (typeof val === 'number') content[key] = String(val)
  })
  emit('change', {
    type: 'form',
    content
  })
}

const handleChange = (key, val) => {
  formData[key] = val
  handleEmitData(formData)
}

handleEmitData(formData)
</script>
