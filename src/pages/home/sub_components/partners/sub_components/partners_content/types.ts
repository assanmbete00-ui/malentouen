import type { ReactNode } from "react";

export type PartnersContentProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;

  action?: {
    label: ReactNode;
    href: string;
  };
};