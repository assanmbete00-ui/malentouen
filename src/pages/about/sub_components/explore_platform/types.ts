import type { ReactNode } from "react";

export type ExplorePlatformItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
};

export type ExplorePlatformSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: ExplorePlatformItem[];
};
