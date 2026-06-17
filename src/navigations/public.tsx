import { type RouteObject } from "react-router-dom";

import ErrorPage from "@pages/error";
import PublicLayout from "@layouts/public_layout";

import Unauthorized from "@pages/unauthorized";

const publicNavigation: RouteObject[] = [
  {
    path: "/unauthorized",
    element: (
      <PublicLayout>
        <Unauthorized />
      </PublicLayout>
    ),
    errorElement: <ErrorPage />,
  },
];

export default publicNavigation;