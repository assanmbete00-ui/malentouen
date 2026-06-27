import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type StatCardProps = {
  value: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  sx?: SxProps<Theme>;
};