import type { ReactNode } from "react";

export type HistoryContentProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;

  action?: {
    label: ReactNode;
    href: string;
  };

  showAction: boolean;
};