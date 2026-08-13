import type { ReactNode } from "react";
import type { FeaturedNewsArticle } from "../../types";

export type FeaturedNewsSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actionLabel: ReactNode;
  article: FeaturedNewsArticle;
};