import type { ReactNode } from "react";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material";

export type ValuesItem = {
  id: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: ReactNode;
  description: ReactNode;
};

export type ValuesSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: ValuesItem[];
};
