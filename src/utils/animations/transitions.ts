import { Transition } from 'motion/react';

/**
 * Reusable transition configurations
 * Ensures consistent animation timing across the app
 */

export const transitions = {
  // Standard easing - smooth and natural
  default: {
    duration: 0.6,
    ease: [0.25, 0.4, 0.25, 1],
  } as Transition,

  // Quick interactions - buttons, toggles
  quick: {
    duration: 0.3,
    ease: [0.25, 0.4, 0.25, 1],
  } as Transition,

  // Slow and emphasized - hero sections, important content
  slow: {
    duration: 0.8,
    ease: [0.25, 0.4, 0.25, 1],
  } as Transition,

  // Bouncy - playful interactions
  bouncy: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  } as Transition,

  // Smooth spring - natural feeling
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  } as Transition,
} as const;

export type TransitionType = keyof typeof transitions;
