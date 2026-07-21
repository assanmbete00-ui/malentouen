import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type GalleryCardProps = {
  image: string;
  title: ReactNode;
  href?: string;
  sx?: SxProps<Theme>;
};