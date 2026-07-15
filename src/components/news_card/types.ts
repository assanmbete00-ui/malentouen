import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type NewsCardProps = {
  image: string;
  category: ReactNode;
  date: ReactNode;
  title: ReactNode;
  description: ReactNode;
  href?: string;
  sx?: SxProps<Theme>;
};