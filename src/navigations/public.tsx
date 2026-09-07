import { type RouteObject } from "react-router-dom";

import ErrorPage from "@pages/error";
import PublicLayout from "@layouts/public_layout";

import Unauthorized from "@pages/unauthorized";
import ForgotPassword from "@pages/forgot_password";
import Policy from "@pages/policy";

const publicNavigation: RouteObject[] = [
  {
    path: "/admin/forgot-password",
    element: (
      <PublicLayout>
        <ForgotPassword />
      </PublicLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/policy",
    element: (
      <PublicLayout>
        <Policy />
      </PublicLayout>
    ),
    errorElement: <ErrorPage />,
  },
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
