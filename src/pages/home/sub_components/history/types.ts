import type { ReactNode } from "react";

export type HistoryContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type HistoryMedia = {
  image: string;
};

export type HistoryAction = {
  label: ReactNode;
  href: string;
};

export type HistoryTimelineItem = {
  id: string;
  period: ReactNode;
  title: ReactNode;
};

export type HistoryOptions = {
  showImage: boolean;
  showTimeline: boolean;
  showAction: boolean;
};

export type HistoryProps = {};