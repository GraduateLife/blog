import { IamGoodAt, Project } from '@site/types';

type Myself = {
  displayName: string;
  formalName: string;
  skills: string[];
  projects: Project[];
  goodAt: IamGoodAt[];
};

export const myself: Myself = {
  displayName: '甜圈',
  formalName: "Donut's Voyage",
  skills: [
    'vuejs-light',
    'react-light',
    'typescript',
    'tailwindcss-light',
    'nestjs-light',
    'github-light',
    'nextjs-light',
    'prisma',
    'jest',
  ],
  projects: [
    {
      name: 'a',
      description: 'app',
      sourceUrl: 'https://www.baidu.com',
      previewImgUrl: 'favicon.png',
    },
    {
      name: 'ab',
      description: 'app',
      sourceUrl: 'https://www.baidu.com',
      previewImgUrl: 'logo.svg',
    },
  ],
  goodAt: [
    {
      name: 'abc',
      description: 'edf',
      coverImageUrl: 'favicon.png',
    },
    {
      name: 'abcd',
      description: 'edf',
      coverImageUrl: 'logo.svg',
    },
    {
      name: 'abccsd',
      description: 'edf',
      coverImageUrl: 'favicon.png',
    },
    {
      name: 'abcdcs',
      description: 'edf',
      coverImageUrl: 'favicon.png',
    },
  ],
};
