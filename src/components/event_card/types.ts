import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type EventCardProps = {
  date: ReactNode;
  category?: ReactNode;
  title: ReactNode;
  location: ReactNode;
  time: ReactNode;
  href?: string;
  sx?: SxProps<Theme>;
};