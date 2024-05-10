import { Link } from '../../types';

export const pathnames = {
  notes: '/docs',
  diary: '/blog',
  aboutMe: '/about-me',
} as const;

export const footerLinks: Link[] = [
  {
    title: '看看文章',
    items: [
      { label: '技术笔记', to: pathnames.notes },
      { label: '日记', to: pathnames.diary },
    ],
  },
  { title: '社交账号', items: [{ label: 'QQ', href: '123456' }] },
  {
    title: '有用资源',
    items: [
      {
        label: 'tete',
        to: 'https://stackoverflow.com/questions/tagged/docusaurus',
      },
    ],
  },
];
