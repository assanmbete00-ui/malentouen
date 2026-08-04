import type { ReactNode } from "react";

export type HeritageLandmarkItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
};

export type HeritageLandmarksSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: HeritageLandmarkItem[];
};