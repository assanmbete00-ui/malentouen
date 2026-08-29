import PROJECTS_BANNER_IMAGE from "@assets/images/home/projects/development.jpg";

export const PROJECTS_BANNER = {
  image: PROJECTS_BANNER_IMAGE,
  imageAltKey: "HOME_PROJECTS_DEVELOPMENT_IMAGE_ALT",
  imagePosition: "center",
  eyebrowKey: "HOME_PROJECTS_EYEBROW",
  titleKey: "HOME_PROJECTS_TITLE",
  descriptionKey: "HOME_PROJECTS_DESCRIPTION",
  breadcrumb: [
    {
      labelKey: "NAVIGATION_HOME",
      href: "/",
    },
    {
      labelKey: "NAVIGATION_PROJECTS",
    },
  ],
} as const;
