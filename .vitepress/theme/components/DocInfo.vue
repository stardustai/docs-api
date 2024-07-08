<template>
  <div>
    <div class="flex items-baseline min-h-14">
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
            @click="
              link.startsWith('http') ? open(link) : router.go(withBase(link))
            "
          >
            <a>{{ version }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="api" class="flex items-center">
      <span
        :class="
          classNames(
            'text-[8px] w-9 h-4 leading-4 rounded-xl text-white text-center',
            {
              'bg-[#0e9b71]': api.method === 'GET',
              'bg-[#0171c2]': api.method === 'POST'
            }
          )
        "
        >{{ api.method }}</span
      >
      <span class="text-sm ml-1">{{ base }}{{ api.url }}</span>
    </div>

    <div class="vp-doc">
      <p>{{ page.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import classNames from 'classnames'
import { useData, useRouter, withBase } from 'vitepress'
import { data as archive } from '../data/archive.data.mts'

interface Version {
  version: string
  link: string
}

const router = useRouter()
const { page, frontmatter } = useData()

const base = 'https://portal-prod.rosettalab.top/rosetta-open'
const api = computed(() => frontmatter.value.api)

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
