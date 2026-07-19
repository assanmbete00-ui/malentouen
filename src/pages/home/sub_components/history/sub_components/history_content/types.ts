import type { ReactNode } from "react";

export type HistoryContentProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  description2: ReactNode;

  action?: {
    label: ReactNode;
    href: string;
  };

  showAction: boolean;
};
