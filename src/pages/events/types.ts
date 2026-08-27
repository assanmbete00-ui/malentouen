import type { ReactNode } from "react";
import type { PageBannerProps } from "@components/page_banner/types";

export type EventsItem = {
  id: string;
  image: string;
  imageAlt: string;
  date: ReactNode;
  dateTime: string;
  category: ReactNode;
  title: ReactNode;
  location: ReactNode;
  time: ReactNode;
};

export type UpcomingEventsSectionData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: EventsItem[];
};

export type EventsAgendaSectionData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: EventsItem[];
};

export type PastEventsSectionData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: Omit<EventsItem, "time">[];
};

export type EventsPageData = {
  banner: PageBannerProps;
  upcoming: UpcomingEventsSectionData;
  agenda: EventsAgendaSectionData;
  past: PastEventsSectionData;
};
