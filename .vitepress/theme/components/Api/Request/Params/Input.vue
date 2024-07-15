<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="daisy-input daisy-input-xs w-36"
    @input="(e) => $emit('change', e.target?.value)"
    v-if="type === 'string'"
  />
  <input
    type="number"
    :value="value"
    :placeholder="placeholder"
    class="daisy-input daisy-input-xs w-36"
    @input="
      (e) =>
        $emit(
          'change',
          e.target?.value === '' ? undefined : Number(e.target?.value)
        )
    "
    v-else-if="type && ['integer', 'long', 'number'].includes(type)"
  />
  <input
    type="checkbox"
    :value="value"
    :placeholder="placeholder"
    class="daisy-checkbox daisy-checkbox-xs border-solid"
    @input="(e) => $emit('change', e.target?.checked)"
    v-else-if="type === 'boolean'"
  />
</template>

<script setup lang="ts">
import type { Data } from '../../../../types'

defineEmits<{
  (e: 'change', value?: string | number | boolean): void
}>()

defineProps<{
  value?: string | number
  type?: Data['type']
}>()

const placeholder = 'Type here'
</script>
