import type { ReactNode } from "react";

export type CulturalGalleryItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: ReactNode;
  href?: string;
};

export type CulturalGallerySectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: CulturalGalleryItem[];
};