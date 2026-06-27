import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type SectionTitleAlign = "left" | "center";

export type SectionTitleProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;

  /**
   * Action optionnelle.
   * Exemple :
   * - Voir tout
   * - Découvrir
   * - Explorer
   */
  action?: ReactNode;

  align?: SectionTitleAlign;

  sx?: SxProps<Theme>;
};