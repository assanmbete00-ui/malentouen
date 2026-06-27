import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type SectionVariant = "default" | "paper" | "primary";

export type SectionContainerSize =
  | "narrow"
  | "default"
  | "wide"
  | "full";

export type SectionProps = {
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  containerSize?: SectionContainerSize;
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
};