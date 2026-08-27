import useTranslate from "@hooks/use_translate";
import { EVENTS } from "@data/events";
import CEREMONY_IMAGE from "@assets/images/home/gallery/ceremony.png";
import PALACE_IMAGE from "@assets/images/home/gallery/palace.png";
import CULTURAL_CEREMONY_IMAGE from "@assets/images/cultures/traditions/ceremonie.png";

import { EVENTS_AGENDA, EVENTS_BANNER, EVENTS_PAST } from "../config";
import type { EventsItem, EventsPageData } from "../types";

const EVENT_IMAGES: Record<string, string> = {
  festival: CEREMONY_IMAGE,
  council: PALACE_IMAGE,
  culture: CULTURAL_CEREMONY_IMAGE,
};

const toLocalDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export default function useEvents(): EventsPageData {
  const { translate, currentLanguage } = useTranslate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(currentLanguage, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(toLocalDate(value));

  const formatTime = (date: string, start: string, end?: string) => {
    const format = (time: string) =>
      new Intl.DateTimeFormat(currentLanguage, {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(`${date}T${time}`));

    return end ? `${format(start)} – ${format(end)}` : format(start);
  };

  const mapEvent = (item: (typeof EVENTS)[number]): EventsItem => ({
    id: item.id,
    image: EVENT_IMAGES[item.id],
    imageAlt: translate(item.titleKey),
    category: translate(item.categoryKey),
    date: formatDate(item.date),
    dateTime: `${item.date}T${item.startTime}`,
    title: translate(item.titleKey),
    location: translate(item.locationKey),
    time: formatTime(item.date, item.startTime, item.endTime),
  });

  const sortByDate = (a: (typeof EVENTS)[number], b: (typeof EVENTS)[number]) =>
    toLocalDate(a.date).getTime() - toLocalDate(b.date).getTime() ||
    a.startTime.localeCompare(b.startTime);

  const upcomingItems = EVENTS.filter((item) => toLocalDate(item.date) >= today)
    .sort(sortByDate)
    .map(mapEvent);

  const pastItems = EVENTS.filter((item) => toLocalDate(item.date) < today)
    .sort((a, b) => sortByDate(b, a))
    .map(mapEvent)
    .map(({ time, ...item }) => item);

  return {
    banner: {
      background: {
        image: EVENTS_BANNER.image,
        alt: translate(EVENTS_BANNER.imageAltKey),
        position: EVENTS_BANNER.imagePosition,
      },
      breadcrumb: EVENTS_BANNER.breadcrumb.map((item) => ({
        label: translate(item.labelKey),
        href: "href" in item ? item.href : undefined,
      })),
      eyebrow: translate(EVENTS_BANNER.eyebrowKey),
      title: translate(EVENTS_BANNER.titleKey),
      description: translate(EVENTS_BANNER.descriptionKey),
    },

    upcoming: {
      id: "events-upcoming",
      eyebrow: translate("EVENTS_UPCOMING_EYEBROW"),
      title: translate("EVENTS_UPCOMING_TITLE"),
      description: translate("EVENTS_UPCOMING_DESCRIPTION"),
      items: upcomingItems,
    },

    agenda: {
      id: EVENTS_AGENDA.id,
      eyebrow: translate(EVENTS_AGENDA.eyebrowKey),
      title: translate(EVENTS_AGENDA.titleKey),
      description: translate(EVENTS_AGENDA.descriptionKey),
      items: upcomingItems,
    },

    past: {
      id: EVENTS_PAST.id,
      eyebrow: translate(EVENTS_PAST.eyebrowKey),
      title: translate(EVENTS_PAST.titleKey),
      description: translate(EVENTS_PAST.descriptionKey),
      items: pastItems,
    },
  };
}
