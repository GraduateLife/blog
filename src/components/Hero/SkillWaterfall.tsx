import { Icon, iconExists, loadIcons } from '@iconify/react/dist/iconify.js';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './hero.module.scss';
import { myself } from '@site/myself';
import IconWithFallback from '../Base/IconWithFallback';

const skillIconImageSrc = (skillName: string) => {
  return `skill-icons:${skillName}`;
};

const createSkillIconSet = () => {
  return myself.skills.map((skillName, idx) => {
    return {
      iconName: skillIconImageSrc(skillName),
      style: {
        top: Math.random() * 93 + '%',
        left: Math.random() * 93 + '%',
        zIndex: 0,
      },
    };
  });
};

export function SkillWaterfall() {
  const { scrollYProgress } = useScroll();

  // 往下滚动 元素向上移动
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-500%'], {
    clamp: false,
  });

  // // 往下滚动 元素向下移动
  // const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '200%'], {
  //   clamp: false,
  // });

  return (
    <>
      {createSkillIconSet().map((skill, index) => {
        // const yValue = index % 2 === 0 ? y1 : y2;
        const yValue = y1;
        return (
          <motion.div
            className={styles.box}
            initial={{ opacity: 0.01, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: Math.random() + 0.2,
              delay: 0.5,
            }}
            style={{
              ...skill.style,
              y: yValue,
            }}
            key={index}
          >
            <IconWithFallback icon={skill.iconName}></IconWithFallback>
          </motion.div>
        );
      })}
    </>
  );
}
