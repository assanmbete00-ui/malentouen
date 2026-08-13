import type { ReactNode } from "react";
import type { OfficialUpdateItem } from "../../types";

export type OfficialUpdatesSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actionLabel: ReactNode;
  actionHref: string;
  items: OfficialUpdateItem[];
};