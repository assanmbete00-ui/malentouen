import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type TextLinkProps = {
  children: ReactNode;
  to: string;
  sx?: SxProps<Theme>;
};