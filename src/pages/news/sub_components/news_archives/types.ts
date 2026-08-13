import type { ReactNode } from "react";
import type { NewsArchiveCategory, NewsArchiveYear } from "../../types";

export type NewsArchiveSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actionLabel: ReactNode;
  actionHref: string;
  categories: NewsArchiveCategory[];
  years: NewsArchiveYear[];
};