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
              <summary>{{ currentVersion }}</summary>
            </details>
          </li>
        </div>
        <ul
          tabIndex="{0}"
          className="daisy-dropdown-content daisy-menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow"
        >
          <li
            v-for="{ version, link } of versions"
            :key="version"
            @click="router.go(link)"
          >
            <a>{{ version }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="vp-doc">
      <p>{{ page.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRouter, withBase } from 'vitepress'
import { data as archive } from '../data/archive.data.mts'

const router = useRouter()
const { page, frontmatter } = useData()

const parseUrl = (url: string): [version: string, path: string] => {
  const matched = url.match(/^\/archive\/(.*?)(\/.*)/)
  return matched ? [matched[1], matched[2]] : ['Latest', url]
}

const versionsMap = archive.reduce((result, current) => {
  const [version, path] = parseUrl(current.url.replace(/^\/.*?\//, '/'))
  return {
    ...result,
    [path]: result[path] ? result[path].concat(version) : [version]
  }
}, {})

const versions = computed(() => {
  const [version, path] = parseUrl(router.route.path)
  if (!versionsMap[path]) return []
  return versionsMap[path]
    .reduce(
      (result, version) => {
        return result.concat({
          version,
          link: withBase(`/archive/${version}${path}`)
        })
      },
      [{ version: 'Latest', link: withBase(path) }]
    )
    .filter((i) => i.version !== version)
})

const currentVersion = computed(() => parseUrl(router.route.path)?.[0])
</script>
