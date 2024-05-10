import React from 'react';
import IconWithFallback from './IconWithFallback';
import Translate from '@docusaurus/Translate';

type Props = {
  icon?: string;
  title: string;
};

const SectionTitle = ({ icon, title }: Props) => {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {icon && <IconWithFallback icon={icon}></IconWithFallback>}
      <span style={{ marginLeft: '10px' }}>
        <Translate>{title}</Translate>
      </span>
    </span>
  );
};

export default SectionTitle;
