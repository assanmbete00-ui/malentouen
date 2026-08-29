import DEVELOPMENT_IMAGE from "@assets/images/home/projects/development.jpg";
import EDUCATION_IMAGE from "@assets/images/home/projects/education.jpg";
import HERITAGE_IMAGE from "@assets/images/home/projects/heritage.jpg";

import type { ProjectSource } from "./types";

export const PROJECTS: ProjectSource[] = [
  {
    id: "education",
    slug: "education-jeunesse",
    image: EDUCATION_IMAGE,
    imageAltKey: "HOME_PROJECTS_EDUCATION_IMAGE_ALT",
    titleKey: "HOME_PROJECTS_EDUCATION_TITLE",
    descriptionKey: "HOME_PROJECTS_EDUCATION_DESCRIPTION",
  },
  {
    id: "heritage",
    slug: "patrimoine-culture",
    image: HERITAGE_IMAGE,
    imageAltKey: "HOME_PROJECTS_HERITAGE_IMAGE_ALT",
    titleKey: "HOME_PROJECTS_HERITAGE_TITLE",
    descriptionKey: "HOME_PROJECTS_HERITAGE_DESCRIPTION",
  },
  {
    id: "development",
    slug: "developpement-local",
    image: DEVELOPMENT_IMAGE,
    imageAltKey: "HOME_PROJECTS_DEVELOPMENT_IMAGE_ALT",
    titleKey: "HOME_PROJECTS_DEVELOPMENT_TITLE",
    descriptionKey: "HOME_PROJECTS_DEVELOPMENT_DESCRIPTION",
  },
];