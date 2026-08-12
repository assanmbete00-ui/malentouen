import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type SectionVariant = "default" | "paper" | "primary" | "secondary";
export type SectionSpacing = "compact" | "default" | "spacious";

export type SectionContainerSize =
  | "narrow"
  | "default"
  | "wide"
  | "full";

export type SectionProps = {
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  containerSize?: SectionContainerSize;
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
};