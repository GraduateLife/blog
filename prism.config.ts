import { Config } from '@docusaurus/types/src/config';
import { themes } from 'prism-react-renderer';
export const prism: Config['themeConfig']['prism'] = {
  theme: themes.oneLight,
  darkTheme: themes.oneDark,
  additionalLanguages: [
    'bash',
    'json',
    'java',
    'python',
    'php',
    'graphql',
    'rust',
    'toml',
    'protobuf',
  ],
  defaultLanguage: 'javascript',
  magicComments: [
    {
      className: 'theme-code-block-highlighted-line',
      line: 'highlight-next-line',
      block: { start: 'highlight-start', end: 'highlight-end' },
    },
    {
      className: 'code-block-error-line',
      line: 'This will error',
    },
  ],
};
