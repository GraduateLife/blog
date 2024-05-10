import useIsBrowser from '@docusaurus/useIsBrowser';
import { useEnvVar } from '@site/src/hooks/useEnvVar';
import { useScrollPercentage } from '@site/src/hooks/useScrollPercentage';
import React, { useState, useEffect } from 'react';

type Props = { currentPercentage: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HorizontalScrollBar = ({ currentPercentage, style, ...rest }: Props) => {
  const { percentage } = useScrollPercentage();
  const [shouldShow, setShouldShow] = useState<'none' | 'block'>('none');
  const isClient = useIsBrowser();

  const index_url = useEnvVar('index_url');
  useEffect(() => {
    if (!isClient) return;
    if (window.location.href !== index_url) {
      setShouldShow('block');
    } else {
      setShouldShow('none');
    }
  }, [window.location.href, isClient]);
  return (
    <div
      {...rest}
      style={{
        ...style,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999999,
        height: '3px',
        backgroundColor: 'red',
        width: currentPercentage + '%',
      }}
    ></div>
  );
};

export default HorizontalScrollBar;
