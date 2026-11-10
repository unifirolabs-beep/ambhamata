import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /**
   * full: 100% width with standard padding
   * narrow: max-w-4xl (ideal for reading / text-dense temple history)
   * standard: max-w-7xl (default standard content layout)
   * wide: max-w-[1800px] (for large screens / high-res hero sections)
   */
  size?: "narrow" | "standard" | "wide" | "full";
}

export function PageContainer({
  children,
  className,
  as: Component = "div",
  size = "standard",
  ...props
}: PageContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    standard: "max-w-7xl",
    wide: "max-w-[1800px]",
    full: "w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

