import type { ReactNode } from "react";
export type CraftsmanshipItem = {
  id: string;
  image: string;
  imageAlt: string;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type CraftsmanshipSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: CraftsmanshipItem[];
};