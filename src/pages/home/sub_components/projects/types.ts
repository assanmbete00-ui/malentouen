import type { ReactNode } from "react";

export type ProjectsContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type ProjectItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
  href?: string;
};

export type ProjectsAction = {
  label: ReactNode;
  href: string;
};

export type ProjectsOptions = {
  showItems: boolean;
  showAction: boolean;
};

export type ProjectsProps = {};