import useTranslate from "@hooks/use_translate";

import { PARTNERS } from "@data/partners";

import {
  PARTNERS_BANNER,
  PARTNERS_DIRECTORY,
  PARTNERS_OVERVIEW,
  PARTNERSHIP_PRINCIPLES,
  PARTNERSHIP_CTA,
} from "../config";

import type { PartnersPageData } from "../types";
import { PARTNERS_ASSETS } from "@pages/home/sub_components/partners/config/partners_assets";

export default function usePartners(): PartnersPageData {
  const { translate } = useTranslate();

  const banner: PartnersPageData["banner"] = {
    background: {
      image: PARTNERS_BANNER.image,
      alt: translate(PARTNERS_BANNER.imageAltKey),
      position: PARTNERS_BANNER.imagePosition,
    },

    breadcrumb: PARTNERS_BANNER.breadcrumb.map((item) => ({
      label: translate(item.labelKey),
      href: "href" in item ? item.href : undefined,
    })),

    eyebrow: translate(PARTNERS_BANNER.eyebrowKey),
    title: translate(PARTNERS_BANNER.titleKey),
    description: translate(PARTNERS_BANNER.descriptionKey),
  };

  const overview: PartnersPageData["overview"] = {
    id: PARTNERS_OVERVIEW.id,
    eyebrow: translate(PARTNERS_OVERVIEW.eyebrowKey),
    title: translate(PARTNERS_OVERVIEW.titleKey),
    description: translate(PARTNERS_OVERVIEW.descriptionKey),
  };

  const directory: PartnersPageData["directory"] = {
    id: PARTNERS_DIRECTORY.id,
    eyebrow: translate(PARTNERS_DIRECTORY.eyebrowKey),
    title: translate(PARTNERS_DIRECTORY.titleKey),
    items: PARTNERS.map((item) => ({
      id: item.id,
      image: PARTNERS_ASSETS[item.imageKey],
      name: translate(item.nameKey),
      type: translate(item.typeKey),
    })),
  };

  const principles: PartnersPageData["principles"] = {
    id: PARTNERSHIP_PRINCIPLES.id,
    eyebrow: translate(PARTNERSHIP_PRINCIPLES.eyebrowKey),
    title: translate(PARTNERSHIP_PRINCIPLES.titleKey),
    items: PARTNERSHIP_PRINCIPLES.principles.map((item) => ({
      id: item.id,
      title: translate(item.titleKey),
      description: translate(item.descriptionKey),
    })),
  };

  const cta: PartnersPageData["cta"] = {
    id: PARTNERSHIP_CTA.id,
    title: translate(PARTNERSHIP_CTA.titleKey),
    description: translate(PARTNERSHIP_CTA.descriptionKey),
    action: {
      label: translate(PARTNERSHIP_CTA.actionLabel),
      href: PARTNERSHIP_CTA.actionPath,
    },
  };

  return {
    banner,
    overview,
    directory,
    principles,
    cta,
  };
}
