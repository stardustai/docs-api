import { defineConfig } from "vitepress";

interface SidebarItem {
  text: string;
  link?: string;
  items?: SidebarItem[];
}

export const localizeLinks = (lang: string, data: SidebarItem[]) => {
  return data.map((item) => ({
    text: item.text,
    link: item.link && `/${lang}${item.link}`,
    items: item.items && localizeLinks(lang, item.items),
  }));
};

export const shared = defineConfig({
	base: "/docs-api/",
  srcDir: "./src",
  title: "API Docs",
  description: "Stardust API",
  rewrites: {
    "en/index.md": "index.md",
    "en/:dir/:file": ":dir/:file",
    "en/:dir/:sub/:file": ":dir/:sub/:file",
  },
	ignoreDeadLinks: [
		/get-task/
	],
  themeConfig: {
    logo: "/favicon.ico",

    outline: {
      level: [2, 3],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/stardustai" }],
  },
})
