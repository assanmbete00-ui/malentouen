import type { ReactNode } from "react";

export type MissionVisionItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
};

export type MissionVisionSectionProps = {
  id: string;
  image: string;
  imageAlt: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: MissionVisionItem[];
};
