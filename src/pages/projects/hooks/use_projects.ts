import useTranslate from "@hooks/use_translate";
import { PROJECTS } from "@data/projects";

import {
  PROJECTS_BANNER,
  PROJECTS_COMMITMENT,
  PROJECTS_OVERVIEW,
  PROJECTS_PORTFOLIO,
} from "../config";
import type { ProjectsPageData } from "../types";

export default function useProjects(): ProjectsPageData {
  const { translate } = useTranslate();

  const toSectionData = (config: {
    id: string;
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
  }) => ({
    id: config.id,
    eyebrow: translate(config.eyebrowKey),
    title: translate(config.titleKey),
    description: translate(config.descriptionKey),
  });

  return {
    banner: {
      background: {
        image: PROJECTS_BANNER.image,
        alt: translate(PROJECTS_BANNER.imageAltKey),
        position: PROJECTS_BANNER.imagePosition,
      },
      breadcrumb: PROJECTS_BANNER.breadcrumb.map((item) => ({
        label: translate(item.labelKey),
        href: "href" in item ? item.href : undefined,
      })),
      eyebrow: translate(PROJECTS_BANNER.eyebrowKey),
      title: translate(PROJECTS_BANNER.titleKey),
      description: translate(PROJECTS_BANNER.descriptionKey),
    },
    overview: {
      ...toSectionData(PROJECTS_OVERVIEW),
      image: PROJECTS_OVERVIEW.image,
      imageAlt: translate(PROJECTS_OVERVIEW.imageAltKey),
    },
    portfolio: {
      ...toSectionData(PROJECTS_PORTFOLIO),
      items: PROJECTS.map((item) => ({
        id: item.id,
        image: item.image,
        imageAlt: translate(item.imageAltKey),
        title: translate(item.titleKey),
        description: translate(item.descriptionKey),
      })),
    },
    commitment: {
      ...toSectionData(PROJECTS_COMMITMENT),
      principles: PROJECTS_COMMITMENT.principles.map((principle) => ({
        id: principle.id,
        title: translate(principle.titleKey),
        description: translate(principle.descriptionKey),
      })),
    },
  };
}
