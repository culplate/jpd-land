'use client';

import { motion, Variants } from 'motion/react';
import { ReactNode } from 'react';
import {
  animationVariants,
  AnimationVariant,
  transitions,
  TransitionType,
} from '@/utils/animations';

export interface AnimateProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  transition?: TransitionType;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

export function Animate({
  children,
  variant = 'fadeInUp',
  delay = 0,
  transition = 'default',
  className = '',
  stagger = false,
  staggerDelay = 0.1,
}: AnimateProps) {
  const containerVariants: Variants = stagger
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }
    : animationVariants[variant];

  const transitionConfig = stagger
    ? undefined
    : {
        ...transitions[transition],
        delay,
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      transition={transitionConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimateItem({
  children,
  variant = 'fadeInUp',
  transition = 'default',
  className = '',
}: Pick<AnimateProps, 'children' | 'variant' | 'transition' | 'className'>) {
  return (
    <motion.div
      variants={animationVariants[variant]}
      transition={transitions[transition]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
