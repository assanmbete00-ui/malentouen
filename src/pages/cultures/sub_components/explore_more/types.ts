import type { ReactNode } from "react";
export type ExploreMoreItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
};

export type ExploreMoreSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actionLabel: ReactNode;
  items: ExploreMoreItem[];
};