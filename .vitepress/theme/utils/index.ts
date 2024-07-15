import markdownit from 'markdown-it'
import { fromHighlighter } from '@shikijs/markdown-it/core'
import { createHighlighterCore, HighlighterGeneric } from 'shiki/core'

function extractLang(info: string) {
  return info
    .trim()
    .replace(/=(\d*)/, '')
    .replace(/:(no-)?line-numbers({| |$|=\d*).*/, '')
    .replace(/(-vue|{| ).*$/, '')
    .replace(/^vue-html$/, 'template')
    .replace(/^ansi$/, '')
}

function getAdaptiveThemeMarker(options: any = {}) {
  return options.hasSingleTheme ? '' : ' vp-adaptive-theme'
}

function preWrapperPlugin(md: any, options: any) {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]

    // remove title from info
    token.info = token.info.replace(/\[.*\]/, '')

    const active = / active( |$)/.test(token.info) ? ' active' : ''
    token.info = token.info.replace(/ active$/, '').replace(/ active /, ' ')

    const lang = extractLang(token.info)

    return (
      `<div class="language-${lang}${getAdaptiveThemeMarker(options)}${active}">` +
      `<button title="${options.codeCopyButtonTitle}" class="copy"></button>` +
      `<span class="lang">${lang}</span>` +
      fence(...args) +
      '</div>'
    )
  }
}

export const createMarkdownRenderer = async () => {
  const md = markdownit({
    html: true
  })

  const highlighter = await createHighlighterCore({
    langs: [
      import('shiki/langs/bash.mjs'),
      import('shiki/langs/python.mjs'),
      import('shiki/langs/java.mjs'),
      import('shiki/langs/go.mjs'),
      import('shiki/langs/javascript.mjs')
    ],
    themes: [
      import('shiki/themes/github-light.mjs'),
      import('shiki/themes/github-dark.mjs')
    ],
    loadWasm: import('shiki/wasm')
  })

  md.use(
    fromHighlighter(highlighter as HighlighterGeneric<any, any>, {
      defaultColor: false,
      themes: { light: 'github-light', dark: 'github-dark' }
    })
  )
  md.use(preWrapperPlugin, {
    codeCopyButtonTitle: 'Copy Code',
    hasSingleTheme: true
  })

  return md
}
