export type NavigationItemModel = {
  id: string;
  label: string;
  path: string;
  visible: boolean;
  external?: boolean;
  badge?: string;
};

export const NAVIGATION_ITEMS: NavigationItemModel[] = [
  {
    id: "home",
    label: "Accueil",
    path: "/",
    visible: true,
  },
  {
    id: "about",
    label: "À propos",
    path: "/about",
    visible: true,
  },
  {
    id: "cultures",
    label: "Culture",
    path: "/cultures",
    visible: true,
  },
  {
    id: "news",
    label: "Actualités",
    path: "/news",
    visible: true,
  },
  {
    id: "events",
    label: "Événements",
    path: "/events",
    visible: true,
  },
  {
    id: "projects",
    label: "Projets",
    path: "/projects",
    visible: true,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    visible: true,
  },
];