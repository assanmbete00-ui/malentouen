import type { ReactNode } from "react";

export type ArticleContentProps = {
  image: string;
  imageAlt: string;
  categoryLabel: ReactNode;
  publishedAt: string;
  formattedDate: string;
  excerpt: ReactNode;
  actionLabel: ReactNode;
  actionHref: string;
};
