import * as fs from 'node:fs';
import * as path from 'node:path';
import * as cheerio from 'cheerio';
import markdownit from 'markdown-it';
import { defineConfig } from 'rspress/config';

const rootDir = path.join(__dirname, 'docs');

const parseBar = () => {
  const result: Array<{
    text: string;
    link: string;
  }> = [];
  const interviewDir = path.join(rootDir, 'interview');
  fs.readdirSync(interviewDir).map((file) => {
    const filePath = path.join(interviewDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const md = markdownit();
    const htmlStr = md.render(fileContent);
    const $ = cheerio.load(htmlStr);
    const title = $('h1').text();
    result.push({
      text: title,
      link: `/interview/${file.replace('.md', '')}`,
    });
  });
  return result;
};

const barContent = parseBar();

const chineseText = {
  lastUpdatedText: '最后更新于',
  prevPageText: '上一篇',
  nextPageText: '下一篇',
  searchPlaceholderText: '搜索文档内容',
  searchNoResultsText: '未找到',
  searchSuggestedQueryText: '请尝试修改内容后重新搜索',
};

export default defineConfig({
  root: rootDir,
  base: '/interview_exp/',
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
          text: '面试',
          link: '/index',
        },
        {
          text: '面试11',
          items: barContent,
        },
      ],
    },
    lastUpdated: true,
    ...chineseText,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/pomeloEdu',
      },
    ],
  },
});
