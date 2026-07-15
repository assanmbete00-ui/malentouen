import type { ReactNode } from "react";

export type CTAContent = {
  title: ReactNode;
  description: ReactNode;
};

export type CTAAction = {
  label: ReactNode;
  href: string;
};

export type CTAOptions = {
  showPrimaryAction: boolean;
  showSecondaryAction: boolean;
};

export type CTAProps = {};