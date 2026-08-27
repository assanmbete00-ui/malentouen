import type { ReactNode } from "react";

export type ArticleHeaderProps = {
  background: {
    image: string;
    alt: string;
  };
  breadcrumb: Array<{ label: ReactNode; href?: string }>;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};
