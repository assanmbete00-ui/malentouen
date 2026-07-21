import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type ProjectsCardProps = {
  image: string;
  title: ReactNode;
  description: ReactNode;
  href?: string;
  sx?: SxProps<Theme>;
};