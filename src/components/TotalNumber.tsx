'use client';

import {
  domAnimation,
  LazyMotion,
  m,
  useAnimate,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type TotalNumberProps = {
  targetNumber: number;
  initialValue?: number;
};
export function TotalNumber({
  targetNumber,
  initialValue = 0,
}: TotalNumberProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  const [_, animate] = useAnimate();
  const startingValue = useMotionValue(initialValue);

  const currentValue = useTransform(
    startingValue,
    (value) => Math.round(value).toLocaleString() + ' Studenten'
  );

  useEffect(() => {
    if (isInView) {
      animate(startingValue, targetNumber, {
        delay: 1.5,
        duration: 6,
        ease: 'easeInOut',
      });
    }
  }, [animate, isInView, targetNumber, startingValue]);

  return (
    <LazyMotion features={domAnimation}>
      <m.p className='text-3xl' ref={ref}>
        {currentValue}
      </m.p>
    </LazyMotion>
  );
}
