import type { ReactNode } from "react";

export type HeroContentProps = {
  badge: ReactNode;
  title: ReactNode;
  description: ReactNode;
  primaryAction: {
    label: ReactNode;
    href: string;
  };
  secondaryAction?: {
    label: ReactNode;
    href: string;
  };
};