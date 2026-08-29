import useTranslate from "@hooks/use_translate";

import { PROJECTS } from "@data/projects";

import { PROJECTS_CONFIG } from "../config/projects_config";

export default function useProjects() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_PROJECTS_EYEBROW"),
    title: translate("HOME_PROJECTS_TITLE"),
    description: translate("HOME_PROJECTS_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_PROJECTS_ACTION"),
    href: PROJECTS_CONFIG.actionPath,
  };

  const items = PROJECTS.map((item) => ({
    id: item.id,
    image: item.image,
    imageAlt: translate(item.imageAltKey),
    title: translate(item.titleKey),
    description: translate(item.descriptionKey),
    href: PROJECTS_CONFIG.actionPath,
  }));

  return {
    content,
    action,
    items,
    options: {
      showItems: PROJECTS_CONFIG.showItems,
      showAction: PROJECTS_CONFIG.showAction,
    },
  };
}
