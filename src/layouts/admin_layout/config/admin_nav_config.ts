import {
  LayoutDashboard,
  Newspaper,
  CalendarDays,
  Landmark,
  Image,
  MessageSquare,
  Users,
  UserCircle,
  Settings,
} from "lucide-react";
import type { ElementType } from "react";

export type AdminNavItem = {
  id: string;
  labelKey: string;
  path: string;
  Icon: ElementType;
};

export type AdminNavGroup = {
  id: string;
  labelKey: string;
  items: AdminNavItem[];
};

export const ADMIN_NAV_GROUPS: AdminNavGroup[] = [
  {
    id: "overview",
    labelKey: "ADMIN_NAV_GROUP_OVERVIEW",
    items: [
      {
        id: "dashboard",
        labelKey: "ADMIN_NAV_DASHBOARD",
        path: "/admin",
        Icon: LayoutDashboard,
      },
    ],
  },
  {
    id: "content",
    labelKey: "ADMIN_NAV_GROUP_CONTENT",
    items: [
      {
        id: "news",
        labelKey: "ADMIN_NAV_NEWS",
        path: "/admin/news",
        Icon: Newspaper,
      },
      {
        id: "events",
        labelKey: "ADMIN_NAV_EVENTS",
        path: "/admin/events",
        Icon: CalendarDays,
      },
      {
        id: "cultures",
        labelKey: "ADMIN_NAV_CULTURES",
        path: "/admin/cultures",
        Icon: Landmark,
      },
      {
        id: "gallery",
        labelKey: "ADMIN_NAV_GALLERY",
        path: "/admin/gallery",
        Icon: Image,
      },
    ],
  },
  {
    id: "management",
    labelKey: "ADMIN_NAV_GROUP_MANAGEMENT",
    items: [
      {
        id: "messages",
        labelKey: "ADMIN_NAV_MESSAGES",
        path: "/admin/messages",
        Icon: MessageSquare,
      },
      {
        id: "users",
        labelKey: "ADMIN_NAV_USERS",
        path: "/admin/users",
        Icon: Users,
      },
    ],
  },
  {
    id: "account",
    labelKey: "ADMIN_NAV_GROUP_ACCOUNT",
    items: [
      {
        id: "profile",
        labelKey: "ADMIN_NAV_PROFILE",
        path: "/admin/profile",
        Icon: UserCircle,
      },
      {
        id: "settings",
        labelKey: "ADMIN_NAV_SETTINGS",
        path: "/admin/settings",
        Icon: Settings,
      },
    ],
  },
];
