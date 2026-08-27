import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type TextLinkProps = {
  children: ReactNode;
  to: string;
  variant?: TextLinkVariant;
  sx?: SxProps<Theme>;
};

export type TextLinkVariant = "default" | "inverse";
