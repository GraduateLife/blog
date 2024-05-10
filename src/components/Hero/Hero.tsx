import React from 'react';
import { Variants, motion, useScroll, useTransform } from 'framer-motion'; // Import motion from framer-motion

import Translate from '@docusaurus/Translate';

import HeroMain from '../../../static/img/undraw_developer_activity.svg';

import styles from './hero.module.scss';
// import { myself } from '@site/src/theme/myself';

import { SkillWaterfall } from './SkillWaterfall';
import { myself } from '@site/myself';
import { pathnames } from '@site/src/theme/routes';
import Typewriter from 'typewriter-effect';
import { useFrontMatters } from '@site/src/hooks/useFrontMatters';

const heroTexts = {
  bigSlogan: '一个普通的代码爱好者, 致力于推广网页开发技巧',
};

const variants: Variants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, y: 30 },
};

function Circle() {
  return <div className={styles.circle} />;
}

function BigName() {
  return (
    <motion.div
      className={styles.hero_text}
      custom={1}
      initial="hidden"
      animate="visible"
      variants={variants}
      onMouseMove={(e) => {
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`);
      }}
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1200)
            .typeString('Hello!')
            .pauseFor(600)
            .deleteAll()
            .typeString('我是' + myself.displayName)
            .start();
        }}
      />

      <span
        className={styles.name}
        onMouseMove={(e) => {
          const bounding = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mouse-x', `${bounding.x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${bounding.y}px`);
        }}
      ></span>
    </motion.div>
  );
}

export default function HeroLanding() {
  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        <BigName />
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Translate id="homepage.hero.slogan">{heroTexts.bigSlogan}</Translate>
        </motion.p>
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {/* <SocialLinks /> */}
        </motion.div>

        <motion.div
          className={styles.buttonGroup}
          custom={4}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className={styles.outer}>
            <div className={styles.gradient} />
            <a className={styles.button} href={pathnames.aboutMe}>
              <Translate id="homepage.hero.aboutMe">关于我</Translate>
            </a>
          </div>
        </motion.div>
      </div>
      <div className={styles.background}>
        <SkillWaterfall />
        <HeroMain style={{ height: '80%', width: '80%' }} />
        <Circle />
      </div>
    </motion.div>
  );
}
