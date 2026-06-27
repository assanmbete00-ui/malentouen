import type { ReactNode } from "react";

export type HeroStatisticItem = {
  value: ReactNode;
  label: ReactNode;
};

export type HeroStatisticsProps = {
  statistics: HeroStatisticItem[];
};