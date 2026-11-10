"use client";

import React from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
  enabled?: boolean;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}
