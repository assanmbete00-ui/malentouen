import type { ReactNode } from "react";
export type IntangibleHeritageItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
};

export type IntangibleHeritageSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
  items: IntangibleHeritageItem[];
};