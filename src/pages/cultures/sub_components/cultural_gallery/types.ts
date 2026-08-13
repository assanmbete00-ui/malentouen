import type { ReactNode } from "react";
import type { MediaLightboxLabels } from "@components/media_lightbox/types";

export type CulturalGalleryItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: ReactNode;
};

export type CulturalGallerySectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  lightboxLabels: MediaLightboxLabels;
  items: CulturalGalleryItem[];
};