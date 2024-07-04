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

export const getApiTitle = (title: string, method: 'GET' | 'POST') => {
  const bg = method === 'GET' ? 'bg-[#0e9b71]' : 'bg-[#0171c2]'
  return `
<span class="flex justify-between items-center">
	<span>${title}</span>
	<span class="text-[8px] w-9 h-4 rounded-xl text-white text-center leading-4 ${bg}">${method}</span>
</span>`
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
