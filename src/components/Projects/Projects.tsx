import React, { useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
// import { Project, projects } from '@site/data/projects';
import Translate from '@docusaurus/Translate';
import styles from './projects.module.scss';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import WithShowMore from '../Base/ShowMore';
// import SectionTitle from '../SectionTitle';
import { BaseImage } from '../Base/Image';
import PreviewMissing from '../../../static/img/undraw_source_code.svg';
import { myself } from '@site/myself';
import { Project } from '@site/types';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconWithFallback from '../Base/IconWithFallback';
import SectionTitle from '../Base/SectionTitle';
const removeHttp = (url: string) => {
  //   return url.replace(/(^\w+:|^)\/\//, '');
  return url;
};

const defaultVelocity = 0.4;
// const showProjects = projects.filter((i) => i.preview);
const _projects = myself.projects;

const Card = ({ project }: { project: Project }) => {
  return (
    <>
      <div className={styles.slide} key={project.name}>
        <a href={project.previewUrl ?? project.sourceUrl} target="_blank">
          {project.previewImgUrl ? (
            <BaseImage
              src={project.previewImgUrl}
              alt={project.name}
              className={styles.image}
              loading="lazy"
            />
          ) : (
            <PreviewMissing
              style={{ width: '100%', height: '100%' }}
            ></PreviewMissing>
          )}

          <div className={styles.slideBody}>
            <h2 className={styles.title}>{project.name}</h2>
            <p className={styles.website}>{project.sourceUrl}</p>
          </div>
        </a>
      </div>
    </>
  );
};

const Slider = ({ items }: { items: Project[] }) => {
  // 初始速度
  let baseVelocity = -defaultVelocity;
  // 移动方向
  const directionFactor = useRef<number>(1);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 6], {
    clamp: false,
  });

  useLayoutEffect(() => {
    baseX.set(6);
  });

  const x = useTransform(
    baseX,
    (v) => `${wrap(10, -3 * _projects.length, v)}%`
  );

  useAnimationFrame((time, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 800);

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    // 重置进度
    if (baseX.get() <= -3 * _projects.length) {
      baseX.set(11);
    }

    baseX.set(baseX.get() + moveBy);
  });

  const handleHoverStart = () => {
    baseX.stop();
    baseVelocity = 0;
  };

  const handleHoverEnd = () => {
    baseVelocity = -defaultVelocity;
  };

  return (
    <div
      className={styles.slider}
      style={{ width: `${_projects.length * 100}%` }}
    >
      <motion.div
        className={styles['slide-track']}
        style={{ x }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {items.map((item, index) => {
          return <Card project={item} key={item.name}></Card>;
        })}
      </motion.div>
    </div>
  );
};

export default function ProjectSection() {
  return (
    <section
      className={clsx(styles.projectContainer, 'container padding-vert--sm')}
    >
      {/* <WithShowMore
        href="https://www.baidu.com"
        TitleComponent={
          <SectionTitle icon="radix-icons:code" title="查看项目"></SectionTitle>
        }
      ></WithShowMore> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SectionTitle icon="radix-icons:code" title="查看项目"></SectionTitle>
        <WithShowMore href="https://www.baidu.com"></WithShowMore>
      </div>

      <div className={styles.content}>
        <div style={{ overflow: 'hidden' }}>
          <Slider items={_projects}></Slider>
        </div>
        <div className={clsx(styles.gradientBox, styles.leftBox)} />
        <div className={clsx(styles.gradientBox, styles.rightBox)} />
      </div>
    </section>
  );
}
