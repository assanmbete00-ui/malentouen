import { type RouteObject } from "react-router-dom";

import ErrorPage from "@pages/error";
import AdminLayout from "@layouts/admin_layout";

import AdminDashboard from "@pages/admin/dashboard";
import AdminLogin from "@pages/login";

const adminNavigation: RouteObject[] = [
  {
    path: "/admin/login",
    element: <AdminLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <AdminLayout>
         <AdminDashboard />
      </AdminLayout> 
    ),
    errorElement: <ErrorPage />,
  },
];

export default adminNavigation;