import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '柠檬教育的面经合集',
  description: '搜集全网1000+的面经进行整理展示',
  mediumZoom: true,
  search: {
    codeBlocks: true,
  },
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          link: '/index',
        },
        {
          text: 'READ',
          link: '/read',
        },
      ],
    },
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    prevPageText: '上一篇',
    nextPageText: '下一篇',
    searchPlaceholderText: '搜索文档内容',
    searchNoResultsText: '未找到',
    searchSuggestedQueryText: '请尝试修改内容后重新搜索',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/pomeloEdu',
      },
    ],
  },
});
