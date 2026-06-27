import type { ReactNode } from "react";

export type HeroAction = {
  label: ReactNode;
  href: string;
};

export type HeroActionsProps = {
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};