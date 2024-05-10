import React from 'react';
import clsx from 'clsx';

import styles from './i_am_good_at.module.scss';
import { IamGoodAt as TypeIamGoodAt } from '@site/types';
import SectionTitle from '../Base/SectionTitle';
import { BaseImage } from '../Base/Image';
import { myself } from '@site/myself';

function IamGoodAt({ name, description, coverImageUrl }: TypeIamGoodAt) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        <BaseImage
          src={coverImageUrl}
          style={{ height: '200px', width: '200px' }}
        ></BaseImage>
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function IamGoodAtSection(): JSX.Element {
  return (
    <section
      className={clsx(styles.featureContainer, 'container padding-vert--sm')}
    >
      <SectionTitle icon={'codicon:account'} title="个人特点"></SectionTitle>
      <div className="row">
        {myself.goodAt.map((props, idx) => (
          <IamGoodAt key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
