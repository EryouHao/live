module.exports = {
  title: 'Live UI',
  description: 'Live UI',
  host: 'localhost',
  base: '/live/',
  docsDir: 'docs',
  siteConfig: {
    links: {
      github: 'https://github.com/EryouHao/live',
    },
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/live/' },
    ],
    sidebar: [
      {
        title: '文档',
        collapsable: false,
        children: [
          '/live/',
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/select',
          '/components/radio',
        ],
      },
    ],
    lastUpdated: '最后更新于',
  },
}