import { defineConfig } from "vitepress";

interface SidebarItem {
  text: string;
  link?: string;
  items?: SidebarItem[];
}

const localizeLinks = (lang: string, data: SidebarItem[]) => {
  return data.map((item) => ({
    text: item.text,
    link: item.link && `/${lang}${item.link}`,
    items: item.items && localizeLinks(lang, item.items),
  }));
};

export default defineConfig({
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

    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/projects/create-project" },
    ],

    sidebar: [
			{
				text: "OVERVIEW",
				items: [
					{
						text: "Main Features",
						link: "/overview/main-features",
					},
					{ text: "Design Concepts", link: "/overview/design-concepts" },
					{ text: "Authentication", link: "/overview/authentication" },
					{ text: "Errors", link: "/overview/errors" },
					{ text: "Data Structure", link: "/overview/data-structure" },
				],
			},
			{
				text: "PROJECTS",
				items: [
					{
						text: "Create Project",
						link: "/projects/create-project",
					},
					{
						text: "List Project",
						link: "/projects/list-project",
					},
					{
						text: "Get Project",
						link: "/projects/get-project-info",
					},
				],
			},
			{
				text: "TASKS",
				items: [
					{
						text: "List Task",
						link: "/tasks/list-task",
					},
					{
						text: "Send Tasks",
						link: "/tasks/send-task",
					},
					{
						text: "Check Send Status",
						link: "/tasks/check-send-status",
					},
					{
						text: "Callbacks",
						link: "/tasks/callbacks",
						items: [
							{
								text: "Re-sending a Callback",
								link: "/tasks/callbacks/re-sending",
							},
						],
					},
					{
						text: "Get Task",
						link: "/tasks/get-task",
					},
				],
			},
			{
				text: "EXPORT",
				items: [
					{
						text: "Export Tasks",
						link: "/export/export-tasks",
					},
				],
			},
		],

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/stardustai" }],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      themeConfig: {
        nav: localizeLinks('zh', [
          { text: "首页", link: "/" },
          { text: "API", link: "/projects/create-project" },
        ]),
        sidebar: localizeLinks('zh', [
					{
						text: "总览",
						items: [
							{
								text: "核心功能",
								link: "/overview/main-features",
							},
							{ text: "设计理念", link: "/overview/design-concepts" },
							{ text: "认证", link: "/overview/authentication" },
							{ text: "异常", link: "/overview/errors" },
							{ text: "数据结构", link: "/overview/data-structure" },
						],
					},
					{
						text: "项目",
						items: [
							{
								text: "创建项目",
								link: "/projects/create-project",
							},
							{
								text: "项目列表",
								link: "/projects/list-project",
							},
							{
								text: "项目详情",
								link: "/projects/get-project-info",
							},
						],
					},
					{
						text: "任务",
						items: [
							{
								text: "任务列表",
								link: "/tasks/list-task",
							},
							{
								text: "发送任务",
								link: "/tasks/send-task",
							},
							{
								text: "检查发送状态",
								link: "/tasks/check-send-status",
							},
							{
								text: "回调",
								link: "/tasks/callbacks",
								items: [
									{
										text: "重新发送回调",
										link: "/tasks/callbacks/re-sending",
									},
								],
							},
							{
								text: "任务详情",
								link: "/tasks/get-task",
							},
						],
					},
					{
						text: "导出",
						items: [
							{
								text: "导出任务",
								link: "/export/export-tasks",
							},
						],
					},
				]),
      },
    },
  },
});
