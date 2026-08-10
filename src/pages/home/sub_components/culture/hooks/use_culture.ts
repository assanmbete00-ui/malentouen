import useTranslate from "@hooks/use_translate";

import { CULTURE_ASSETS } from "../config/culture_assets";
import { CULTURE_CONFIG } from "../config/culture_config";
import { CULTURE_ITEMS } from "../config/culture_items";

export default function useCulture() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_CULTURE_EYEBROW"),
    title: translate("HOME_CULTURE_TITLE"),
    description: translate("HOME_CULTURE_DESCRIPTION"),
  };

  const highlight = {
    image: CULTURE_ASSETS.highlight,
    title: translate("HOME_CULTURE_HIGHLIGHT_TITLE"),
    description: translate("HOME_CULTURE_HIGHLIGHT_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_CULTURE_ACTION"),
    href: CULTURE_CONFIG.actionPath,
  };

  const items = CULTURE_ITEMS.map((item) => ({
    id: item.id,
    image: CULTURE_ASSETS.items[item.imageKey],
    imageAlt: translate(item.imageAltKey),
    category: translate(item.categoryKey),
    title: translate(item.titleKey),
    description: translate(item.descriptionKey),
    href: item.href,
  }));

  const options = {
    showHighlight: CULTURE_CONFIG.showHighlight,
    showItems: CULTURE_CONFIG.showItems,
    showAction: CULTURE_CONFIG.showAction,
  };

  return {
    content,
    highlight,
    action,
    items,
    options,
  };
}
