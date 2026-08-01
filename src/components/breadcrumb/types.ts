import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type BreadcrumbItem = {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  sx?: SxProps<Theme>;
};