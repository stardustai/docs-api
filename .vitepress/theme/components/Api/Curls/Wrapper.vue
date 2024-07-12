<template>
  <details class="details custom-block" @toggle="(e) => $emit('toggle', e)">
    <summary>
      <span>Examples</span>
      <select
        class="daisy-select daisy-select-xs w-24 float-right"
        @change="(e) => $emit('change', e)"
      >
        <option v-for="item of options" :key="item">{{ item }}</option>
      </select>
    </summary>
    <slot />
  </details>
</template>

<script setup lang="ts">
defineEmits(['change', 'toggle'])

defineProps<{
  options: string[]
}>()
</script>
