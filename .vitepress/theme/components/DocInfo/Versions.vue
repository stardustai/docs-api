<template>
  <div v-if="versions.length" className="daisy-dropdown daisy-dropdown-hover">
    <div class="daisy-menu">
      <li>
        <details>
          <summary>{{ currentVersion }}</summary>
        </details>
      </li>
    </div>
    <ul
      className="daisy-dropdown-content daisy-menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow"
    >
      <li
        v-for="{ version, link } of versions"
        :key="version"
        @click="
          link.startsWith('http') ? open(link) : router.go(withBase(link))
        "
      >
        <a>{{ version }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRouter, withBase } from 'vitepress'
import { data as archive } from '../../data/archive.data.mts'

interface Version {
  version: string
  link: string
}

const router = useRouter()
const { frontmatter } = useData()

const parseUrl = (url: string): [version: string, path: string] => {
  const matched = url.match(/^\/archive\/(.*?)(\/.*)/)
  return matched ? [matched[1], matched[2]] : ['Latest', url]
}

const versionsMap = archive.reduce(
  (result, current) => {
    const [version, path] = parseUrl(current.url.replace(/^\/.*?\//, '/'))
    return {
      ...result,
      [path]: result[path] ? result[path].concat(version) : [version]
    }
  },
  {} as Record<string, string[]>
)

const versions = computed<Version[]>(() => {
  const [version, path] = parseUrl(router.route.path)
  const frontVersions = Object.entries(frontmatter.value.versions || {}).reduce(
    (result, [version, link]) => {
      return result.concat({
        version,
        link
      } as Version)
    },
    [] as Version[]
  )
  if (!versionsMap[path]) return frontVersions
  return versionsMap[path]
    .reduce(
      (result, version) => {
        return result.concat({
          version,
          link: `/archive/${version}${path}`
        })
      },
      [{ version: 'Latest', link: path }].concat(frontVersions)
    )
    .filter((i) => i.version !== version)
})

const currentVersion = computed(() => parseUrl(router.route.path)?.[0])

const open = (url: string) => window.open(url, '_blank')
</script>
