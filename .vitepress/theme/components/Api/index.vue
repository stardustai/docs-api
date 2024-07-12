<template>
  <div>
    <Params title="Query PARAMS" :data="query" />
    <Params title="BODY PARAMS" :data="body" />
    <Params title="PATH PARAMS" :data="path" />
    <Results title="RESPONSES" :data="results" />

    <Params
      v-for="[title, data] of params"
      :key="title + ' PARAMS'"
      :title="title"
      :data="data"
      :input="showInput"
      @change="(val) => handleChange(title, val)"
    />

    <div class="mt-8">
      <Suspense>
        <Curls :data="data" @toggle="handleToggle" />
        <template #fallback>
          <Wrapper :options="['Shell']" />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import Params from './Params/index.vue'
import type { Data } from './Params/index.vue'
import Results from './Results.vue'
import Curls from './Curls/index.vue'
import Wrapper from './Curls/Wrapper.vue'

const props = defineProps<{
  body?: Record<string, Data>
  path?: Record<string, Data>
  query?: Record<string, Data>
  results?: Record<string, any>
  params?: string | [string, Record<string, Data>][]
}>()

const data = reactive({})
const showInput = ref(false)

const params = computed<[string, Record<string, Data>][]>(() => {
  if (!props.params || typeof props.params !== 'string') {
    return params || []
  }
  return JSON.parse(decodeURIComponent(props.params))
})

const handleToggle = (open) => {
  showInput.value = open
}

const handleChange = (key, val) => {
  data[key.toLowerCase()] = val
}
</script>
