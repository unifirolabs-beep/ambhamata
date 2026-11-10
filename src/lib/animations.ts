import type { Variants, Transition } from "motion/react";

/**
 * Standard temple transition easing:
 * Gentle, dignified, devotional curve avoiding jarring snaps.
 */
export const templeTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1], // easeOutCubic
};

export const gentleTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

// 1. Fade-in
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: templeTransition,
  },
};

// 2. Fade-up
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: templeTransition,
  },
};

// 3. Fade-down
export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: templeTransition,
  },
};

// 4. Staggered card reveal (container + items)
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: templeTransition,
  },
};

// 5. Image reveal
export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 6. Button hover interactions
export const buttonHoverVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeIn" },
  },
};

// 7. Navigation transitions
export const navMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// 8. Section scroll reveals
export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 9. Page transitions
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3 },
  },
};

