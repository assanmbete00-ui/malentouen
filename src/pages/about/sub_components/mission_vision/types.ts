import type { ReactNode } from "react";

export type MissionVisionBlock = {
  title: ReactNode;
  description: ReactNode;
  descriptionSecondary?: ReactNode;
};

export type MissionVisionSectionProps = {
  id: string;
  image: string;
  imageAlt: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  mission: MissionVisionBlock;
  vision: MissionVisionBlock;
};