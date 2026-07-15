import type { ReactNode } from "react";

export type GalleryContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type GalleryAction = {
  label: ReactNode;
  href: string;
};

export type GalleryItem = {
  id: string;
  image: string;
  title: ReactNode;
  href?: string;
};

export type GalleryOptions = {
  showItems: boolean;
  showAction: boolean;
};

export type GalleryProps = {};