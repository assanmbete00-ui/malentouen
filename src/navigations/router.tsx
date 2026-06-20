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
  basename: process.env.PUBLIC_URL || "/",
});

export default router;
