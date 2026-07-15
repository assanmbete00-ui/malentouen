import type { ReactNode } from "react";

export type NewsContentProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  action?: {
    label: ReactNode;
    href: string;
  };
};
