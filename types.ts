export type Link = {
  title: string;
  items:
    | {
        label: string;
        to: string;
      }[]
    | {
        label: string;
        href: string;
      }[];
};

export type Project = {
  name: string;
  description: string;
  badges?: string[];
  isFavorite?: boolean;
  previewImgUrl?: string;
  previewUrl?: string;
  sourceUrl: string;
};

export type IamGoodAt = {
  name: string;
  description: string;
  coverImageUrl: string;
};
