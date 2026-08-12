import useTranslate from "@hooks/use_translate";

import { PROJECTS_ASSETS } from "../config/projects_assets";
import { PROJECTS_CONFIG } from "../config/projects_config";
import { PROJECTS_ITEMS } from "../config/projects_items";

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

  const items = PROJECTS_ITEMS.map((item) => ({
    id: item.id,
    image: PROJECTS_ASSETS[item.imageKey],
    imageAlt: translate(item.imageAltKey),
    title: translate(item.titleKey),
    description: translate(item.descriptionKey),
    href: item.href,
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