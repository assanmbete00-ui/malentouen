import type { ReactNode } from "react";

export type EventItem = {
  id: string;
  category: ReactNode;
  date: ReactNode;
  dateTime: string;
  title: ReactNode;
  location: ReactNode;
  time: ReactNode;
  href?: string;
};

export type EventsContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type EventsAction = {
  label: ReactNode;
  href: string;
};

export type EventsOptions = {
  showItems: boolean;
  showAction: boolean;
};

export type EventsProps = {};
