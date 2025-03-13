<template>
  <div v-if="params">
    <h3 v-if="title" class="text-xs font-semibold uppercase">
      {{ title.replaceAll('_', ' ') }}
      <span v-if="type" class="opacity-60 ml-0.5">[{{ type }}]</span>
    </h3>
    <div
      class="bg-[var(--vp-sidebar-bg-color)] rounded-lg border border-gray-200 dark:border-[#2e2e32] border-solid my-4 px-2"
    >
      <div
        v-for="([key, item], index) of Object.entries(params).filter(
          ([, item]) => !item.hidden
        )"
        :class="
          classnames(
            'py-2.5',
            index === 0
              ? ''
              : 'border-t border-solid border-gray-200 dark:border-[#2e2e32]'
          )
        "
      >
        <details class="daisy-collapse daisy-collapse-arrow rounded-none">
          <summary
            :class="
              classnames(
                'text-xl font-medium p-0 m-0 min-h-0 flex items-center',
                item.description ? 'after:-mt-1' : 'after:-mt-4',
                {
                  'daisy-collapse-title': isComplex(item)
                }
              )
            "
          >
            <div class="text-base font-normal pl-2">
              <div class="flex justify-between">
                <div class="flex items-baseline">
                  <span
                    v-if="item.required !== false"
                    class="text-red-500 absolute -ml-2 mt-0.5 text-xs"
                    >*</span
                  >
                  <span>{{ key }}</span>
                  <span class="ml-2 text-xs text-gray-500">{{
                    item.type
                  }}</span>
                  <span
                    v-if="item.type === 'array'"
                    class="text-xs text-gray-500"
                    >[{{ item.items.type }}]</span
                  >
                  <span v-if="item.default" class="ml-2 text-xs text-gray-500">
                    Defaults to {{ item.default }}
                  </span>
                </div>
                <Input
                  :type="item.type"
                  :value="item.default"
                  :class="
                    classnames(
                      'transition-opacity mr-1 mt-1',
                      input ? 'opacity-100' : 'opacity-0'
                    )
                  "
                  @change="(val) => handleChange(key, val)"
                />
              </div>
              <div
                v-if="item.description"
                class="text-xs"
                v-html="md.renderInline(item.description)"
              />
            </div>
          </summary>
          <div v-if="isComplex(item)" class="daisy-collapse-content -mb-6 px-3">
            <api-params v-if="isObject(item)" :data="item.properties" />
            <api-params
              v-else-if="isArray(item) && isObject(item.items)"
              :data="item.items.properties"
            />
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'api-params'
}
</script>

<script setup lang="ts">
import classnames from 'classnames'
import markdownit from 'markdown-it'
import { computed, reactive } from 'vue'
import Input from './Input.vue'
import type { ArrayData, Data, ObjectData } from '../../../../types'

const md = markdownit({
  html: true
})

const emit = defineEmits<{
  (e: 'change', value?: Record<string, any>): void
}>()

const props = defineProps<{
  title?: string
  data?: string | Record<string, Data>
  input?: boolean
  type?: 'form' | 'json'
}>()

const params = computed<Record<string, Data>>(() => {
  if (typeof props.data !== 'string') return props.data
  return JSON.parse(decodeURIComponent(props.data))
})

const isObject = (item: Data): item is ObjectData => {
  return item.type.startsWith('object') && !!item.properties
}
const isArray = (item: Data): item is ArrayData => item.type === 'array'

const isComplex = (item: Data): item is ObjectData | ArrayData => {
  return isObject(item) || (isArray(item) && isObject(item.items))
}

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
