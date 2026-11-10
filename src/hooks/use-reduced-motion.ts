"use client";

import { useReducedMotion } from "motion/react";

export function usePrefersReducedMotion(): boolean {
  const shouldReduce = useReducedMotion();
  return Boolean(shouldReduce);
}
