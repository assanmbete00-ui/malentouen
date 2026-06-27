import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type BadgeVariant = "primary" | "secondary" | "outline";

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  sx?: SxProps<Theme>;
};