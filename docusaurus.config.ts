import 'dotenv/config';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { pathnames, footerLinks } from './src/theme/routes';
import { prism } from './prism.config';
import { plugins } from './src/plugins';
import { myself } from './myself';

const websiteTitle = '甜圈小站';
const websiteTagline = '兵闻拙速，未睹巧之久也';
const useOriginalPlugin = false;

const injectEnvVars = (): Record<string, string> => {
  const injected = {};
  for (const key in process.env) {
    if (key.startsWith('PUBLIC_')) {
      const _k = key.split('PUBLIC_')[1].toLowerCase();
      injected[_k] = process.env[key];
    }
  }
  return injected;
};
const customFields = injectEnvVars();

const navbar: Config['themeConfig']['navbar'] = {
  title: websiteTitle,
  logo: {
    alt: 'My Site Logo',
    src: 'img/favicon.png',
  },
  hideOnScroll: false,
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'autoSidebar',
      position: 'left',
      label: '技术笔记',
    },
    { to: pathnames.diary, label: '日记', position: 'left' },

    // {
    //   label: '更多',
    //   position: 'left',
    //   items: [
    //     { label: '归档', to: 'blog/archive' },
    //     { label: '笔记', to: 'docs/skill' },
    //     { label: '资源', to: 'resources' },
    //     { label: '友链', to: 'friends' },
    //     { label: '工具推荐', to: 'docs/tools' },
    //   ],
    // },
    {
      href: 'https://github.com/facebook/docusaurus',
      label: '本站源码',
      position: 'right',
    },
  ],
};

const footer: Config['themeConfig']['footer'] = {
  style: 'dark',
  links: footerLinks,
  copyright: `<div>
  Copyright © ${new Date().getFullYear()} ${myself.formalName}, Built with
  Docusaurus and Love!
</div>`,
};

export default {
  title: websiteTitle,
  tagline: websiteTagline,
  favicon: 'img/favicon_64.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  customFields,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GraduateLife', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './src/components/Base/sidebars.ts',
          showLastUpdateTime: true,
        },
        blog: useOriginalPlugin,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [...plugins, ['./src/plugins/content-blog.plugin', {}]],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar,
    footer,
    prism: prism,
  } satisfies Preset.ThemeConfig,
};
