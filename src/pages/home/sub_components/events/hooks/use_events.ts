import useTranslate from "@hooks/use_translate";
import { EVENTS } from "@data/events";

import { EVENTS_CONFIG } from "../config/events_config";

export default function useEvents() {
  const { translate, currentLanguage } = useTranslate();

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(currentLanguage, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${date}T00:00:00`));

  const formatTime = (startTime: string, endTime?: string) =>
    endTime ? `${startTime} – ${endTime}` : startTime;

  const content = {
    eyebrow: translate("HOME_EVENTS_EYEBROW"),
    title: translate("HOME_EVENTS_TITLE"),
    description: translate("HOME_EVENTS_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_EVENTS_ACTION"),
    href: EVENTS_CONFIG.actionPath,
  };

  const items = EVENTS.map((item) => ({
    id: item.id,
    category: translate(item.categoryKey),
    date: formatDate(item.date),
    dateTime: item.date,
    title: translate(item.titleKey),
    location: translate(item.locationKey),
    time: formatTime(item.startTime, item.endTime),
    href: EVENTS_CONFIG.actionPath,
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
