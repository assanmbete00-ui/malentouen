import useTranslate from "@hooks/use_translate";

import { EVENTS_CONFIG } from "../config/events_config";
import { EVENTS_ITEMS } from "../config/events_items";

export default function useEvents() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_EVENTS_EYEBROW"),
    title: translate("HOME_EVENTS_TITLE"),
    description: translate("HOME_EVENTS_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_EVENTS_ACTION"),
    href: EVENTS_CONFIG.actionPath,
  };

  const items = EVENTS_ITEMS.map((item) => ({
    id: item.id,
    category: translate(item.categoryKey),
    date: translate(item.dateKey),
    title: translate(item.titleKey),
    location: translate(item.locationKey),
    time: translate(item.timeKey),
    href: item.href,
  }));

  const options = {
    showItems: EVENTS_CONFIG.showItems,
    showAction: EVENTS_CONFIG.showAction,
  };

  return {
    content,
    action,
    items,
    options,
  };
}