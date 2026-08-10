import type { ReactNode } from "react";
export type CulturalExpressionItem = {
  id: string;
  image: string;
  imageAlt: string;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type CulturalExpressionsSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: CulturalExpressionItem[];
};