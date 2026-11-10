export type Locale = "en" | "kn";

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NavigationProps {
  currentPath?: string;
  locale?: Locale;
}

export interface FeatureCardProps extends BaseComponentProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
}

export interface ServiceCardProps extends BaseComponentProps {
  title: string;
  timing?: string;
  amount?: string;
  description: string;
  badge?: string;
}

export interface SectionHeadingProps extends BaseComponentProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  decorative?: boolean;
}

