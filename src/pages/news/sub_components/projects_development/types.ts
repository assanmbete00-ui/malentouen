import type { ReactNode } from "react";
import type { NewsArticleItem } from "../../types";

export type ProjectsDevelopmentSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actionLabel: ReactNode;
  actionHref: string;
  items: NewsArticleItem[];
};