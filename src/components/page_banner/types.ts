import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

import type { BreadcrumbItem } from "../breadcrumb/types";

export type PageBannerBackground = {
  /**
   * Source de l’image du bandeau.
   */
  image: string;

  /**
   * Description accessible de l’image.
   * Laisser vide lorsque l’image est purement décorative.
   */
  alt?: string;

  /**
   * Position CSS de l’image.
   *
   * Exemples :
   * - "center"
   * - "center 35%"
   * - "top"
   */
  position?: string;
};

export type PageBannerProps = {
  /**
   * Configuration de l’image d’arrière-plan.
   */
  background: PageBannerBackground;

  /**
   * Fil d’Ariane déjà préparé par la page.
   */
  breadcrumb?: BreadcrumbItem[];

  /**
   * Petit libellé placé au-dessus du titre.
   */
  eyebrow?: ReactNode;

  /**
   * Titre principal de la page.
   */
  title: ReactNode;

  /**
   * Texte introductif facultatif.
   */
  description?: ReactNode;

  /**
   * Zone complémentaire facultative :
   * actions, boutons ou badges.
   */
  children?: ReactNode;

  /**
   * Styles complémentaires appliqués à la racine.
   */
  sx?: SxProps<Theme>;
};