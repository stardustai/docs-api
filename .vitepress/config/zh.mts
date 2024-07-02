import { defineConfig } from 'vitepress'
import { localizeLinks } from './shared.mts'

export const zh = defineConfig({
  lang: 'zh-Hans',
  themeConfig: {
    nav: localizeLinks('zh', [
      { text: '首页', link: '/' },
      { text: 'API', link: '/projects/create-project' }
    ]),
    sidebar: localizeLinks('zh', [
      {
        text: '总览',
        items: [
          {
            text: '核心功能',
            link: '/overview/main-features'
          },
          { text: '设计理念', link: '/overview/design-concepts' },
          { text: '认证', link: '/overview/authentication' },
          { text: '异常', link: '/overview/errors' },
          { text: '数据结构', link: '/overview/data-structure' }
        ]
      },
      {
        text: '项目',
        items: [
          {
            text: '创建项目',
            link: '/projects/create-project'
          },
          {
            text: '项目列表',
            link: '/projects/list-project'
          },
          {
            text: '项目详情',
            link: '/projects/get-project-info'
          }
        ]
      },
      {
        text: '任务',
        items: [
          {
            text: '任务列表',
            link: '/tasks/list-task'
          },
          {
            text: '发送任务',
            link: '/tasks/send-task'
          },
          {
            text: '检查发送状态',
            link: '/tasks/check-send-status'
          },
          {
            text: '回调',
            link: '/tasks/callbacks',
            items: [
              {
                text: '重新发送回调',
                link: '/tasks/callbacks/re-sending'
              }
            ]
          },
          {
            text: '任务详情',
            link: '/tasks/get-task'
          }
        ]
      },
      {
        text: '导出',
        items: [
          {
            text: '导出任务',
            link: '/export/export-tasks'
          }
        ]
      }
    ]),
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
