import { createBrowserRouter, type RouteObject } from "react-router-dom";

import publicNavigation from "./public";
import mainNavigation from "./main";
import adminNavigation from "./admin";

const routes: RouteObject[] = [
  ...publicNavigation,
  ...mainNavigation,
  ...adminNavigation,
];

const router = createBrowserRouter(routes, {
  // GitHub Pages sert le site depuis un sous-chemin (/malentouen/ ici)
  basename:
    typeof window !== "undefined" && window.location.pathname
      ? window.location.pathname.replace(/\/+$/, "")
      : "/malentouen",
});

export default router;
