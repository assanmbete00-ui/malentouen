import type { ReactNode } from "react";
import type { SvgIconComponent } from "@mui/icons-material";

export type ValueItem = {
  id: string;
  icon: SvgIconComponent;
  title: ReactNode;
  description: ReactNode;
};

export type ValuesSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: ValueItem[];
};