import type { ReactNode } from "react";

export type CultureContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type CultureMedia = {
  highlight: string;
};

export type CultureAction = {
  label: ReactNode;
  href: string;
};

export type CultureItem = {
  id: string;
  image: string;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
  href?: string;
};

export type CultureOptions = {
  showHighlight: boolean;
  showItems: boolean;
  showAction: boolean;
};

export type CultureProps = {};