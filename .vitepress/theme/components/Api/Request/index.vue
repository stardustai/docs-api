<template>
  <Params
    v-for="[key, type, params] of request"
    :key="key"
    :type="type as 'form' | 'json'"
    :title="key + (paramKeys.includes(key) ? ' params' : '')"
    :data="params"
    :input="showInput"
    @change="(val) => handleChange(key, val)"
  />

  <div class="mt-8">
    <Suspense>
      <Curls :data="data" @toggle="handleToggle" />
      <template #fallback>
        <Wrapper :options="['Shell']" />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import Params from './Params/index.vue'
import Curls from './Curls/index.vue'
import Wrapper from './Curls/Wrapper.vue'
import type { Data } from '../../../types'

const props = defineProps<{
  data?: string | [string, string, Record<string, Data>][]
}>()

const data = reactive({})
const showInput = ref(false)
const paramKeys = ['body', 'query', 'path', 'form']

const handleToggle = (open) => {
  showInput.value = open
}

const handleChange = (key, val) => {
  data[key.toLowerCase()] = val
}

const request = computed<[string, string, Record<string, Data>][]>(() => {
  if (!props.data || typeof props.data !== 'string') {
    return props.data || []
  }
  return JSON.parse(decodeURIComponent(props.data))
})
</script>
