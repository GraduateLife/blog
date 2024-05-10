import React from 'react';
import { Icon } from '@iconify/react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './show-more.module.scss';
import IconWithFallback from './IconWithFallback';

type Props = {
  icon?: string;
  href?: string;
  TitleComponent?: React.ReactNode;
};

export default function WithShowMore({ TitleComponent, icon, href }: Props) {
  return (
    // <div className={styles.sectionTitle}>
    //   <h2>
    //     {icon && <IconWithFallback icon={icon}></IconWithFallback>}
    //     {TitleComponent}
    //   </h2>
    //   {href && (
    <Link
      href={href}
      className={styles.moreButton}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <Translate id="homepage.showMore">查看更多</Translate>
      <IconWithFallback icon="pajamas:long-arrow"></IconWithFallback>
    </Link>
    // )}
    // </div>
  );
}
