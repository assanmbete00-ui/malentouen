export type NavigationItemModel = {
  id: string;
  labelKey: string;
  path: string;
  visible?: boolean;
  external?: boolean;
  badge?: string;
  transparentHeader?: boolean;
};

export type PreparedNavigationItem = Omit<NavigationItemModel, "labelKey"> & {
  label: string;
  active?: boolean;
};

export function isNavigationItemActive(pathname: string, path: string) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function supportsTransparentHeader(pathname: string) {
  return NAVIGATION_ITEMS.some(
    (item) =>
      item.transparentHeader === true &&
      (item.path === "/"
        ? pathname === "/"
        : pathname === item.path || pathname.startsWith(`${item.path}/`)),
  );
}

export const NAVIGATION_ITEMS: NavigationItemModel[] = [
  {
    id: "home",
    labelKey: "NAVIGATION_HOME",
    path: "/",
    visible: true,
    transparentHeader: true,
  },
  {
    id: "about",
    labelKey: "NAVIGATION_ABOUT",
    path: "/about",
    visible: true,
    transparentHeader: true,
  },
  {
    id: "cultures",
    labelKey: "NAVIGATION_CULTURES",
    path: "/cultures",
    visible: true,
    transparentHeader: true,
  },
  {
    id: "news",
    labelKey: "NAVIGATION_NEWS",
    path: "/news",
    visible: true,
    transparentHeader: true,
  },
  {
    id: "events",
    labelKey: "NAVIGATION_EVENTS",
    path: "/events",
    visible: true,
    transparentHeader: true,
  },
  {
    id: "projects",
    labelKey: "NAVIGATION_PROJECTS",
    path: "/projects",
    visible: true,
    transparentHeader: true,
  },
  {
    id: "partners",
    labelKey: "NAVIGATION_PARTNERS",
    path: "/partners",
    visible: true,
    transparentHeader: true,
  },
  {
    id: "contact",
    labelKey: "NAVIGATION_CONTACT",
    path: "/contact",
    visible: true,
    transparentHeader: true,
  },
];
