import path from 'path'
import { normalizePath } from 'vite'
import { defineConfig } from 'vitepress'
import Container from 'markdown-it-container'
import topLevelAwait from 'vite-plugin-top-level-await'
import { viteStaticCopy } from 'vite-plugin-static-copy'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
}

export const localizeLinks = (lang: string, data: SidebarItem[]) => {
  return data.map((item) => ({
    text: item.text,
    link: item.link && `/${lang}${item.link}`,
    items: item.items && localizeLinks(lang, item.items)
  }))
}

export const getApiTitle = (title: string, method: 'GET' | 'POST') => {
  const bg = method === 'GET' ? 'bg-[#0e9b71]' : 'bg-[#0171c2]'
  return `
<span class="flex justify-between items-center">
  <span>${title}</span>
  <span class="text-[8px] w-9 h-4 rounded-xl text-white text-center leading-4 ${bg}">${method}</span>
</span>`
}

const resolve = (p) => {
  const basePath = path.join(__dirname, '../../node_modules')
  return normalizePath(path.resolve(basePath, p))
}

global.VITEPRESS_CONFIG = {
  srcDir: './src',
  cleanUrls: true,
  site: {}
}

export const shared = defineConfig({
  ...global.VITEPRESS_CONFIG,
  title: 'API Docs',
  description: 'Stardust API',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  ignoreDeadLinks: [/get-task/],
  themeConfig: {
    logo: '/favicon.ico',

    api: {
      base: 'https://portal-prod.rosettalab.top/rosetta-open',
      authorization: {
        'X-STARDUST-KEY': '<X-STARDUST-KEY>',
        'X-TS': '<X-TS>',
        'X-SIGN': '<X-SIGN>'
      }
    },

    outline: {
      level: [2, 3]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/stardustai' }]
  },
  vite: {
    plugins: [
      topLevelAwait({
        promiseExportName: '__tla',
        promiseImportName: (i) => `__tla_${i}`
      }),
      viteStaticCopy({
        targets: [
          {
            src: resolve('web-tree-sitter/tree-sitter.wasm'),
            dest: './'
          },
          {
            src: resolve('curlconverter/dist/tree-sitter-bash.wasm'),
            dest: './'
          }
        ]
      })
    ]
  },
  transformHead() {
    return [
      [
        'script',
        { type: 'text/javascript' },
        `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "n5nncu2bkk");`
      ]
    ]
  },
  markdown: {
    config: (md) => {
      interface Token {
        info: string
        type: string
        tag: string
        content: string
        hidden: boolean
      }
      const getTokens = (tokens: Token[], name: string, start: number) => {
        let end = false
        return tokens.filter((token, i) => {
          if (end) return false
          if (i > start && token.type === `container_${name}_close`) {
            end = true
          }
          return i > start && token.type === 'fence' && token.tag === 'code'
        })
      }
      const getElements = (
        tokens: Token[],
        template: (data: {
          key: string
          type: string
          content: string
        }) => string
      ) => {
        return tokens.reduce((rst, token) => {
          const { info, content } = token
          token.content = ''
          token.hidden = true
          const name = info.match(/\[(.*)\]/)?.[1] || ''
          const [key, type] = name.split(':')
          return rst + template({ key, type, content })
        }, '')
      }
      md.use(Container, 'params', {
        validate: (params) => params.trim().match(/^params$/),
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            const codeTokens = getTokens(tokens, 'params', idx)
            const template = ({ key, type, content }) => `
              [${JSON.stringify(key)}, ${JSON.stringify(type || null)}, ${content}],
            `
            const dataStr = `[
              ${getElements(codeTokens, template).trim().replace(/\,$/, '')}
            ]`
            return `
              <div>
                <api-request data=${encodeURIComponent(dataStr)} />
                <div class="hidden">
            `
          }
          return '</div></div>\n'
        }
      })
      md.use(Container, 'results', {
        validate: (params) => params.trim().match(/^results$/),
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            const codeTokens = getTokens(tokens, 'results', idx)
            const template = ({ key, type, content }) => {
              const dataStr = `[
                ${JSON.stringify(key)}, ${JSON.stringify(type || null)}, ${content}
              ]`
              return `<api-result data="${encodeURIComponent(dataStr)}" />`
            }
            return `
              <div>
                ${getElements(codeTokens, template)}
                <div class="hidden">
            `
          }
          return '</div></div>\n'
        }
      })
    }
  }
})
