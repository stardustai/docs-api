<template>
  <div>
    <div class="flex items-baseline">
      <div class="vp-doc">
        <h1>{{ page.title }}</h1>
      </div>

      <div
        v-if="versions.length"
        className="daisy-dropdown daisy-dropdown-hover"
      >
        <div class="daisy-menu">
          <li>
            <details>
              <summary>{{ currentVersion || 'Latest' }}</summary>
            </details>
          </li>
        </div>
        <ul
          tabIndex="{0}"
          className="daisy-dropdown-content daisy-menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow"
        >
          <li
            v-for="[version, link] of versions"
            :key="version"
            @click="router.go(link)"
          >
            <a>{{ version }}</a>
          </li>
        </ul>
      </div>
      <div v-else-if="frontmatter.versions">{{ currentVersion }}</div>
    </div>
    <div class="vp-doc">
      <p>{{ page.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useRouter } from 'vitepress'

const { page, frontmatter } = useData()
const router = useRouter()

const currentVersion = computed(() => {
  return router.route.path.match(/archive\/(.*?)\//)?.[1]
})

const versions = computed(() => {
  if (!frontmatter.value.versions) return []
  const result = Object.entries(frontmatter.value.versions)
  if (!currentVersion.value) return result
  const path = router.route.path.replace(/\/archive\/.*?\//, '/')
  return [['Latest', path]]
    .concat(result)
    .filter(([version]) => version !== currentVersion.value)
})
</script>
