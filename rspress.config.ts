import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
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
  },
});
