<template>
  <div class="h-full pt-[36vh] flex flex-col items-center justify-center">
    <span class="daisy-loading daisy-loading-ball daisy-loading-lg" />
    <a class="text-sm" :href="target">redirecting...</a>
  </div>
</template>

<script setup lang="ts">
import { useRouter, withBase } from 'vitepress'
import { redirectRouteMap } from '../../config/routes.mts'
import { computed } from 'vue'

const router = useRouter()

const redirectTo = (path: string) => {
  const { search, hash } = location
  const target = withBase(`${path}${search}${hash}`)
  router.go(target), location.replace(target)
}

const target = computed(() => {
  const pathname = router.route.path.replace(/\/$/g, '')
  if (redirectRouteMap[pathname]) {
    return redirectRouteMap[pathname]
  }
  if (pathname.startsWith('/latest/')) {
    return pathname.replace('/latest/', '/')
  }
  return '/'
})

if (!import.meta.env.SSR) {
  redirectTo(target.value)
}
</script>
