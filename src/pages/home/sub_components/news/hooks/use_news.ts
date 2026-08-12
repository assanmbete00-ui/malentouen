import useTranslate from "@hooks/use_translate";

import { NEWS_ASSETS } from "../config/news_assets";
import { NEWS_CONFIG } from "../config/news_config";
import { NEWS_ITEMS } from "../config/news_items";

export default function useNews() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_NEWS_EYEBROW"),
    title: translate("HOME_NEWS_TITLE"),
    description: translate("HOME_NEWS_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_NEWS_ACTION"),
    href: NEWS_CONFIG.actionPath,
  };

  const items = NEWS_ITEMS.map((item) => ({
    id: item.id,
    image: NEWS_ASSETS.items[item.imageKey],
    imageAlt: translate(item.imageAltKey),
    category: translate(item.categoryKey),
    date: translate(item.dateKey),
    title: translate(item.titleKey),
    description: translate(item.descriptionKey),
    href: item.href,
  }));

  const options = {
    showItems: NEWS_CONFIG.showItems,
    showAction: NEWS_CONFIG.showAction,
  };

  return {
    content,
    action,
    items,
    options,
  };
}