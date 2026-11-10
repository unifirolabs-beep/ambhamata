"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import {
  fadeInVariants,
  fadeUpVariants,
  fadeDownVariants,
  sectionRevealVariants,
  imageRevealVariants,
} from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export type AnimationPreset = "fade-in" | "fade-up" | "fade-down" | "reveal" | "image";

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  preset?: AnimationPreset;
  delay?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function AnimationWrapper({
  preset = "fade-up",
  delay = 0,
  once = true,
  className,
  children,
  ...props
}: AnimationWrapperProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = () => {
    switch (preset) {
      case "fade-in":
        return fadeInVariants;
      case "fade-down":
        return fadeDownVariants;
      case "reveal":
        return sectionRevealVariants;
      case "image":
        return imageRevealVariants;
      case "fade-up":
      default:
        return fadeUpVariants;
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

