<template>
  <span
    :class="
      classNames(
        'text-[8px] w-9 h-4 leading-4 rounded-xl text-white text-center font-medium',
        {
          'bg-[#0e9b71]': method === 'GET',
          'bg-[#0171c2]': method === 'POST'
        }
      )
    "
    >{{ method }}</span
  >
</template>

<script setup lang="ts">
import classNames from 'classnames'

defineProps<{
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}>()
</script>
