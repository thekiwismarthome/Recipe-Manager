import { defineConfig } from 'vitepress';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const { version } = JSON.parse(readFileSync(resolve(here, '../../custom_components/recipe_manager/manifest.json'), 'utf8'));
const REPO = 'https://github.com/thekiwismarthome/Recipe-Manager';
const CARD = 'https://github.com/thekiwismarthome/Recipe-Manager-Card';

// Served from /Recipe-Manager/ on GitHub Pages. Set SITE_BASE=/ for a custom domain.
const BASE = process.env.SITE_BASE || '/Recipe-Manager/';

export default defineConfig({
  title: 'Recipe Manager',
  description: 'Your recipes, meal plan and kitchen timers inside Home Assistant.',
  lang: 'en-NZ',
  base: BASE,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${BASE}logo.svg` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Recipe Manager',
    nav: [
      { text: 'Live demo', link: '/demo' },
      { text: 'User manual', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: `v${version}`, items: [
        { text: 'Release notes', link: `${REPO}/releases` },
        { text: 'Integration on GitHub', link: REPO },
        { text: 'Card on GitHub', link: CARD },
      ] },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Start here', items: [
          { text: 'Getting started', link: '/guide/getting-started' },
        ] },
        { text: 'Using Recipe Manager', items: [
          { text: 'Your recipe library', link: '/guide/recipes' },
          { text: 'Cooking from a recipe', link: '/guide/cooking' },
          { text: 'Adding and editing recipes', link: '/guide/adding-recipes' },
          { text: 'Meal planner', link: '/guide/meal-planner' },
          { text: 'Shopping list', link: '/guide/shopping' },
          { text: 'Timers', link: '/guide/timers' },
        ] },
        { text: 'Settings', items: [
          { text: 'Appearance', link: '/guide/appearance' },
          { text: 'Backup', link: '/guide/backup' },
        ] },
        { text: 'Help', items: [
          { text: 'FAQ and troubleshooting', link: '/guide/faq' },
        ] },
      ],
    },
    socialLinks: [{ icon: 'github', link: REPO }],
    search: { provider: 'local' },
    editLink: { pattern: `${REPO}/edit/main/site/:path`, text: 'Edit this page on GitHub' },
    outline: { level: [2, 3], label: 'On this page' },
    footer: { message: 'Open source under the MIT licence.', copyright: 'Recipe Manager for Home Assistant' },
  },
  vite: { server: { fs: { allow: ['..'] } } },
});
