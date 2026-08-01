import type { ReactNode } from "react";

export type GovernanceItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
};

export type GovernanceSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: GovernanceItem[];
};
