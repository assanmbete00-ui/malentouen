import useTranslate from "@hooks/use_translate";

import {
  ABOUT_BANNER,
  ABOUT_CHIEF,
  ABOUT_COMMITMENTS,
  ABOUT_EXPLORE_PLATFORM,
  ABOUT_GOVERNANCE,
  ABOUT_HERITAGE_LANDMARKS,
  ABOUT_HISTORY,
  ABOUT_IDENTITY,
  ABOUT_MISSION_VISION,
  ABOUT_VALUES,
} from "../config";

import type { AboutPageData } from "../types";

export default function useAbout(): AboutPageData {
  const { translate } = useTranslate();

  const banner: AboutPageData["banner"] = {
    background: {
      image: ABOUT_BANNER.image,
      alt: translate(ABOUT_BANNER.imageAltKey),
      position: ABOUT_BANNER.imagePosition,
    },

    breadcrumb: ABOUT_BANNER.breadcrumb.map((item) => ({
      label: translate(item.labelKey),
      href: "href" in item ? item.href : undefined,
    })),

    eyebrow: translate(ABOUT_BANNER.eyebrowKey),
    title: translate(ABOUT_BANNER.titleKey),
    description: translate(ABOUT_BANNER.descriptionKey),
  };

  const identity: AboutPageData["identity"] = {
    id: ABOUT_IDENTITY.id,
    image: ABOUT_IDENTITY.image,
    imageAlt: translate(ABOUT_IDENTITY.imageAltKey),

    eyebrow: translate(ABOUT_IDENTITY.eyebrowKey),
    title: translate(ABOUT_IDENTITY.titleKey),
    description: translate(ABOUT_IDENTITY.descriptionKey),
    descriptionSecondary: translate(
      ABOUT_IDENTITY.descriptionSecondaryKey,
    ),

    highlights: ABOUT_IDENTITY.highlights.map((item) => ({
      id: item.id,
      title: translate(item.titleKey),
      description: translate(item.descriptionKey),
    })),
  };

  const history: AboutPageData["history"] = {
    id: ABOUT_HISTORY.id,
    image: ABOUT_HISTORY.image,
    imageAlt: translate(ABOUT_HISTORY.imageAltKey),

    eyebrow: translate(ABOUT_HISTORY.eyebrowKey),
    title: translate(ABOUT_HISTORY.titleKey),
    description: translate(ABOUT_HISTORY.descriptionKey),
    descriptionSecondary: translate(
      ABOUT_HISTORY.descriptionSecondaryKey,
    ),

    timeline: ABOUT_HISTORY.timeline.map((item) => ({
      id: item.id,
      period: translate(item.periodKey),
      title: translate(item.titleKey),
      description: translate(item.descriptionKey),
    })),
  };

  const missionVision: AboutPageData["missionVision"] = {
    id: ABOUT_MISSION_VISION.id,
    image: ABOUT_MISSION_VISION.image,
    imageAlt: translate(ABOUT_MISSION_VISION.imageAltKey),

    eyebrow: translate(ABOUT_MISSION_VISION.eyebrowKey),
    title: translate(ABOUT_MISSION_VISION.titleKey),
    description: translate(ABOUT_MISSION_VISION.descriptionKey),

    mission: {
      title: translate(ABOUT_MISSION_VISION.mission.titleKey),
      description: translate(ABOUT_MISSION_VISION.mission.descriptionKey),
      descriptionSecondary: translate(ABOUT_MISSION_VISION.mission.descriptionSecondaryKey),
    },

    vision: {
      title: translate(ABOUT_MISSION_VISION.vision.titleKey),
      description: translate(ABOUT_MISSION_VISION.vision.descriptionKey),
      descriptionSecondary: translate(ABOUT_MISSION_VISION.vision.descriptionSecondaryKey),
    },
  };

  const values: AboutPageData["values"] = {
    id: ABOUT_VALUES.id,

    eyebrow: translate(ABOUT_VALUES.eyebrowKey),
    title: translate(ABOUT_VALUES.titleKey),
    description: translate(ABOUT_VALUES.descriptionKey),

    items: ABOUT_VALUES.items.map((item) => ({
      id: item.id,
      icon: item.icon,
      title: translate(item.titleKey),
      description: translate(item.descriptionKey),
    })),
  };

  const governance: AboutPageData["governance"] = {
    id: ABOUT_GOVERNANCE.id,

    eyebrow: translate(ABOUT_GOVERNANCE.eyebrowKey),
    title: translate(ABOUT_GOVERNANCE.titleKey),
    description: translate(ABOUT_GOVERNANCE.descriptionKey),

    items: ABOUT_GOVERNANCE.items.map((item) => ({
      id: item.id,
      title: translate(item.titleKey),
      description: translate(item.descriptionKey),
    })),
  };

  const chief: AboutPageData["chief"] = {
    id: ABOUT_CHIEF.id,
    image: ABOUT_CHIEF.image,
    imageAlt: translate(ABOUT_CHIEF.imageAltKey),

    eyebrow: translate(ABOUT_CHIEF.eyebrowKey),
    title: translate(ABOUT_CHIEF.titleKey),
    description: translate(ABOUT_CHIEF.descriptionKey),
    descriptionSecondary: translate(
      ABOUT_CHIEF.descriptionSecondaryKey,
    ),

    signature: {
      name: translate(ABOUT_CHIEF.signature.nameKey),
      title: translate(ABOUT_CHIEF.signature.titleKey),
    },
  };

  const commitments: AboutPageData["commitments"] = {
    id: ABOUT_COMMITMENTS.id,

    eyebrow: translate(ABOUT_COMMITMENTS.eyebrowKey),
    title: translate(ABOUT_COMMITMENTS.titleKey),
    description: translate(ABOUT_COMMITMENTS.descriptionKey),

    items: ABOUT_COMMITMENTS.items.map((item) => ({
      id: item.id,
      title: translate(item.titleKey),
      description: translate(item.descriptionKey),
    })),
  };

  const heritageLandmarks: AboutPageData["heritageLandmarks"] = {
    id: ABOUT_HERITAGE_LANDMARKS.id,

    eyebrow: translate(ABOUT_HERITAGE_LANDMARKS.eyebrowKey),
    title: translate(ABOUT_HERITAGE_LANDMARKS.titleKey),
    description: translate(
      ABOUT_HERITAGE_LANDMARKS.descriptionKey,
    ),

    items: ABOUT_HERITAGE_LANDMARKS.items.map((item) => ({
      id: item.id,
      image: item.image,
      imageAlt: translate(item.imageAltKey),
      title: translate(item.titleKey),
      description: translate(item.descriptionKey),
    })),
  };

  const explorePlatform:
  AboutPageData["explorePlatform"] = {
    id: ABOUT_EXPLORE_PLATFORM.id,

    eyebrow: translate(ABOUT_EXPLORE_PLATFORM.eyebrowKey),
    title: translate(ABOUT_EXPLORE_PLATFORM.titleKey,),
    description: translate(ABOUT_EXPLORE_PLATFORM.descriptionKey,),
    actionLabel: translate(ABOUT_EXPLORE_PLATFORM.actionLabelKey,
    ),

    items: ABOUT_EXPLORE_PLATFORM.items.map(
      (item) => ({
        id: item.id,
        title: translate(item.titleKey),
        description: translate(
          item.descriptionKey,
        ),
        href: item.href,
      }),
    ),
  };

  return {
    banner,
    identity,
    history,
    missionVision,
    values,
    governance,
    chief,
    commitments,
    heritageLandmarks,
    explorePlatform,
  };
}