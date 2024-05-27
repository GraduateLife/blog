import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
type Props = { type: 'remote' | 'static' } & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export const BaseImage = ({ src, type = 'static', ...rest }: Props) => {
  if (type === 'static') {
    src = '/img/' + src;
  }
  return (
    <img
      src={useBaseUrl(src)}
      loading="lazy"
      style={{ width: '100%', height: '100%' }}
      {...rest}
    />
  );
};
