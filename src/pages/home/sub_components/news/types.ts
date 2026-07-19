import type { ReactNode } from "react";

export type NewsContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type NewsAction = {
  label: ReactNode;
  href: string;
};

export type NewsItem = {
  id: string;
  image: string;
  category: ReactNode;
  date: ReactNode;
  title: ReactNode;
  description: ReactNode;
  href?: string;
};

export type NewsOptions = {
  showItems: boolean;
  showAction: boolean;
};

export type NewsProps = {};