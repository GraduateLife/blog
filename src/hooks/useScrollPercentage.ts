import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

const asPercentage = (_p: number) => Math.round(_p * 100);

export const useScrollPercentage = (cb?: Function) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const postRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ container: postRef });

  useLayoutEffect(() => {
    postRef.current = document.querySelector('#__docusaurus');
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
    cb?.(asPercentage(latest));
  });

  const percentage = useMemo(() => {
    return asPercentage(scrollProgress);
  }, [scrollProgress]);

  return {
    percentage,
  };
};
