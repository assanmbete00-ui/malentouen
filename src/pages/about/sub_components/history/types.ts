import type { ReactNode } from "react";

export type HistoryTimelineItem = {
  id: string;
  period: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type HistorySectionProps = {
  id: string;

  image: string;
  imageAlt: string;

  eyebrow: ReactNode;
  title: ReactNode;

  description: ReactNode;
  descriptionSecondary?: ReactNode;

  timeline: HistoryTimelineItem[];
};