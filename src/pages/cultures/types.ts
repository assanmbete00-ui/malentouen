import type { ReactNode } from "react";
import type { PageBannerProps } from "@components/page_banner/types";

export type CultureHighlight = {
  id: string;
  image: string;
  imageAlt: string;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type IntangibleHeritageItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
};

export type GalleryItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: ReactNode;
};

export type TransmissionAction = {
  label: ReactNode;
  href: string;
};

export type ExploreMoreItem = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
};

export type CulturesPageData = {
  banner: PageBannerProps;

  introduction: {
    id: string;
    image: string;
    imageAlt: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    descriptionSecondary?: ReactNode;
  };

  traditions: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    items: CultureHighlight[];
  };

  expressions: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    items: CultureHighlight[];
  };

  craftsmanship: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    items: CultureHighlight[];
  };

  intangibleHeritage: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    descriptionSecondary?: ReactNode;
    items: IntangibleHeritageItem[];
  };

  gallery: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    items: GalleryItem[];
  };

  transmission: {
    id: string;
    image: string;
    imageAlt: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    descriptionSecondary?: ReactNode;
    action: TransmissionAction;
  };

  exploreMore: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    actionLabel: ReactNode;
    items: ExploreMoreItem[];
  };
};