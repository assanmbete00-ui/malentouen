import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type CultureCardProps = {
  image: string;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
  href?: string;
  sx?: SxProps<Theme>;
};