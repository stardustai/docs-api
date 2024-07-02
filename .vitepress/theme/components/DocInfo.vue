<template>
  <div class="vp-doc">
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>
