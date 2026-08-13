import useTranslate from "@hooks/use_translate";
import {
  CULTURES_BANNER,
  CULTURES_INTRODUCTION,
  CULTURES_TRADITIONS,
  CULTURES_EXPRESSIONS,
  CULTURES_CRAFTSMANSHIP,
  CULTURES_INTANGIBLE_HERITAGE,
  CULTURES_GALLERY,
  CULTURES_TRANSMISSION,
  CULTURES_EXPLORE_MORE, 
} from "../config";

import type { CulturesPageData } from "../types";

export default function useCultures(): CulturesPageData {
  const { translate } = useTranslate();

  const banner: CulturesPageData["banner"] = {
    background: {
      image: CULTURES_BANNER.image,
      alt: translate(CULTURES_BANNER.imageAltKey),
      position: CULTURES_BANNER.imagePosition,
    },

    breadcrumb: CULTURES_BANNER.breadcrumb.map((item) => ({
      label: translate(item.labelKey),
      href: "href" in item ? item.href : undefined,
    })),

    eyebrow: translate(CULTURES_BANNER.eyebrowKey),
    title: translate(CULTURES_BANNER.titleKey),
    description: translate(CULTURES_BANNER.descriptionKey),
  };

  const introduction: CulturesPageData["introduction"] = {
    id: CULTURES_INTRODUCTION.id,

    image: CULTURES_INTRODUCTION.image,
    imageAlt: translate(
      CULTURES_INTRODUCTION.imageAltKey,
    ),

    eyebrow: translate(
      CULTURES_INTRODUCTION.eyebrowKey,
    ),

    title: translate(
      CULTURES_INTRODUCTION.titleKey,
    ),

    description: translate(
      CULTURES_INTRODUCTION.descriptionKey,
    ),

    descriptionSecondary: translate(
      CULTURES_INTRODUCTION.descriptionSecondaryKey,
    ),
  };

  const traditions: CulturesPageData["traditions"] = {
    id: CULTURES_TRADITIONS.id,

    eyebrow: translate(
      CULTURES_TRADITIONS.eyebrowKey,
    ),

    title: translate(
      CULTURES_TRADITIONS.titleKey,
    ),

    description: translate(
      CULTURES_TRADITIONS.descriptionKey,
    ),

    items: CULTURES_TRADITIONS.items.map(
      (item) => ({
        id: item.id,

        image: item.image,

        imageAlt: translate(
          item.imageAltKey,
        ),

        category: translate(
          item.categoryKey,
        ),

        title: translate(
          item.titleKey,
        ),

        description: translate(
          item.descriptionKey,
        ),
      }),
    ),
  };

  const expressions:
  CulturesPageData["expressions"] = {
    id: CULTURES_EXPRESSIONS.id,

    eyebrow: translate(
      CULTURES_EXPRESSIONS.eyebrowKey,
    ),

    title: translate(
      CULTURES_EXPRESSIONS.titleKey,
    ),

    description: translate(
      CULTURES_EXPRESSIONS.descriptionKey,
    ),

    items: CULTURES_EXPRESSIONS.items.map(
      (item) => ({
        id: item.id,

        image: item.image,

        imageAlt: translate(
          item.imageAltKey,
        ),

        category: translate(
          item.categoryKey,
        ),

        title: translate(
          item.titleKey,
        ),

        description: translate(
          item.descriptionKey,
        ),
      }),
    ),
  };

  const craftsmanship:
  CulturesPageData["craftsmanship"] = {
    id: CULTURES_CRAFTSMANSHIP.id,

    eyebrow: translate(
      CULTURES_CRAFTSMANSHIP.eyebrowKey,
    ),

    title: translate(
      CULTURES_CRAFTSMANSHIP.titleKey,
    ),

    description: translate(
      CULTURES_CRAFTSMANSHIP.descriptionKey,
    ),

    items:
      CULTURES_CRAFTSMANSHIP.items.map(
        (item) => ({
          id: item.id,

          image: item.image,

          imageAlt: translate(
            item.imageAltKey,
          ),

          category: translate(
            item.categoryKey,
          ),

          title: translate(
            item.titleKey,
          ),

          description: translate(
            item.descriptionKey,
          ),
        }),
      ),
  };

  const intangibleHeritage:
  CulturesPageData["intangibleHeritage"] = {
    id: CULTURES_INTANGIBLE_HERITAGE.id,

    eyebrow: translate(
      CULTURES_INTANGIBLE_HERITAGE.eyebrowKey,
    ),

    title: translate(
      CULTURES_INTANGIBLE_HERITAGE.titleKey,
    ),

    description: translate(
      CULTURES_INTANGIBLE_HERITAGE.descriptionKey,
    ),

    descriptionSecondary: translate(
      CULTURES_INTANGIBLE_HERITAGE.descriptionSecondaryKey,
    ),

    items:
      CULTURES_INTANGIBLE_HERITAGE.items.map(
        (item) => ({
          id: item.id,

          title: translate(
            item.titleKey,
          ),

          description: translate(
            item.descriptionKey,
          ),
        }),
      ),
  };

  const gallery: CulturesPageData["gallery"] = {
  id: CULTURES_GALLERY.id,

  eyebrow: translate(CULTURES_GALLERY.eyebrowKey),
  title: translate(CULTURES_GALLERY.titleKey),
  description: translate(CULTURES_GALLERY.descriptionKey),

  lightboxLabels: {
    close: translate(CULTURES_GALLERY.lightbox.closeLabelKey),
    previous: translate(CULTURES_GALLERY.lightbox.previousLabelKey),
    next: translate(CULTURES_GALLERY.lightbox.nextLabelKey),
  },

  items: CULTURES_GALLERY.items.map((item) => ({
    id: item.id,
    image: item.image,
    imageAlt: translate(item.imageAltKey),
    title: translate(item.titleKey),
  })),
};

  const transmission:
  CulturesPageData["transmission"] = {
    id: CULTURES_TRANSMISSION.id,

    image: CULTURES_TRANSMISSION.image,

    imageAlt: translate(
      CULTURES_TRANSMISSION.imageAltKey,
    ),

    eyebrow: translate(
      CULTURES_TRANSMISSION.eyebrowKey,
    ),

    title: translate(
      CULTURES_TRANSMISSION.titleKey,
    ),

    description: translate(
      CULTURES_TRANSMISSION.descriptionKey,
    ),

    descriptionSecondary: translate(
      CULTURES_TRANSMISSION.descriptionSecondaryKey,
    ),

    action: {
      label: translate(
        CULTURES_TRANSMISSION.actionLabelKey,
      ),

      href:
        CULTURES_TRANSMISSION.actionHref,
    },
  };

  const exploreMore:
  CulturesPageData["exploreMore"] = {
    id: CULTURES_EXPLORE_MORE.id,

    eyebrow: translate(
      CULTURES_EXPLORE_MORE.eyebrowKey,
    ),

    title: translate(
      CULTURES_EXPLORE_MORE.titleKey,
    ),

    description: translate(
      CULTURES_EXPLORE_MORE.descriptionKey,
    ),

    actionLabel: translate(
      CULTURES_EXPLORE_MORE.actionLabelKey,
    ),

    items:
      CULTURES_EXPLORE_MORE.items.map(
        (item) => ({
          id: item.id,

          title: translate(
            item.titleKey,
          ),

          description: translate(
            item.descriptionKey,
          ),

          href: item.href, 
        }), 
      ),  
  }; 

  return {
    banner,
    introduction,
    traditions,
    expressions,
    craftsmanship,
    intangibleHeritage,
    gallery,
    transmission,
    exploreMore,
  };
}