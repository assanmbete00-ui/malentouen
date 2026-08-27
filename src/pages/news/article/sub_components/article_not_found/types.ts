import type { ReactNode } from "react";

export type ArticleNotFoundProps = {
  title: ReactNode;
  description: ReactNode;
  actionLabel: ReactNode;
  actionHref: string;
};
