import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type CardVariant = "default" | "interactive" | "flat";

export type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  onClick?: () => void;
  sx?: SxProps<Theme>;
};