import type { ReactNode } from "react";

export type CultureHighlightProps = {
  image: string;
  title: ReactNode;
  description: ReactNode;
  action?: {
    label: ReactNode;
    href: string;
  };
  showAction: boolean;
};