import type { ReactNode } from "react";

export type CommitmentsItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
};

export type CommitmentsSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: CommitmentsItem[];
};
