export type NavigationItemModel = {
  id: string;
  labelKey: string;
  path: string;
  visible?: boolean;
  external?: boolean;
  badge?: string;
};

export type PreparedNavigationItem = Omit<NavigationItemModel, "labelKey"> & {
  label: string;
  active?: boolean;
};

export function isNavigationItemActive(pathname: string, path: string) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export const NAVIGATION_ITEMS: NavigationItemModel[] = [
  {
    id: "home",
    labelKey: "NAVIGATION_HOME",
    path: "/",
    visible: true,
  },
  {
    id: "about",
    labelKey: "NAVIGATION_ABOUT",
    path: "/about",
    visible: true,
  },
  {
    id: "cultures",
    labelKey: "NAVIGATION_CULTURES",
    path: "/cultures",
    visible: true,
  },
  {
    id: "news",
    labelKey: "NAVIGATION_NEWS",
    path: "/news",
    visible: true,
  },
  {
    id: "events",
    labelKey: "NAVIGATION_EVENTS",
    path: "/events",
    visible: true,
  },
  {
    id: "projects",
    labelKey: "NAVIGATION_PROJECTS",
    path: "/projects",
    visible: true,
  },
  {
    id: "partners",
    labelKey: "NAVIGATION_PARTNERS",
    path: "/partners",
    visible: true,
  },
  {
    id: "contact",
    labelKey: "NAVIGATION_CONTACT",
    path: "/contact",
    visible: true,
  },
];
