import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type EventFeatureCardProps = {
  image: string;
  imageAlt: string;
  date: ReactNode;
  dateTime: string;
  category: ReactNode;
  title: ReactNode;
  location: ReactNode;
  time: ReactNode;
  featured?: boolean;
  sx?: SxProps<Theme>;
};