import type { LucideIcon } from "lucide-react";

export type DashboardStatId = "news" | "events" | "messages" | "media";

export type DashboardStatConfig = {
  id: DashboardStatId;
  labelKey: string;
  descriptionKey: string;
  icon: LucideIcon;
};

export type DashboardStat = {
  id: DashboardStatId;
  label: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
};

export type PendingAction = {
  id: string;
  label: string;
  count: number;
};

export type UpcomingEvent = {
  id: string;
  title: string;
  startDate: string;
  location?: string;
  status: "published" | "draft" | "cancelled";
};

export type RecentActivityItem = {
  id: string;
  type: string;
  title: string;
  description?: string;
  createdAt?: string;
};

export type QuickActionItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  path?: string;
};

export type RecentContentItem = {
  id: string;
  title: string;
  type: string;
  status: string;
  updatedAt?: string;
};
