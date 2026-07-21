import type { ReactNode } from "react";

export type EventsContentProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  action?: {
    label: ReactNode;
    href: string;
  };
};