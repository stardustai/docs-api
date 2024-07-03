import { defineConfig } from 'vitepress'

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

export const shared = defineConfig({
  srcDir: './src',
  title: 'API Docs',
  description: 'Stardust API',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  cleanUrls: true,
  ignoreDeadLinks: [/get-task/],
  themeConfig: {
    logo: '/favicon.ico',

    outline: {
      level: [2, 3]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/stardustai' }]
  }
})
