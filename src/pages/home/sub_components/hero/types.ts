import type { ReactNode } from "react";

export type HeroAction = {
  label: ReactNode;
  href: string;
};

export type HeroStatistic = {
  value: ReactNode;
  label: ReactNode;
};

export type HeroProps = {
  badge: ReactNode;
  title: ReactNode;
  description: ReactNode;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  statistics?: HeroStatistic[];
};