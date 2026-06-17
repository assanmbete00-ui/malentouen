import { type RouteObject } from "react-router-dom";

import ErrorPage from "@pages/error";

import MainLayout from "@layouts/main_layout";
import { MainPageContextProvider } from "@contexts/page_context/main/main_page_context";

import Home from "@pages/home";
import About from "@pages/about";
import Events from "@pages/events";
import Cultures from "@pages/cultures";
import News from "@pages/news";
import Projects from "@pages/projects";
import Contact from "@pages/contact";

const mainNavigation: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout bgColor="secondary" ContextProvider={MainPageContextProvider}>
        <Home />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <MainLayout bgColor="secondary" ContextProvider={MainPageContextProvider}>
        <About />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/events",
    element: (
      <MainLayout bgColor="secondary" ContextProvider={MainPageContextProvider}>
        <Events />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cultures",
    element: (
      <MainLayout bgColor="secondary" ContextProvider={MainPageContextProvider}>
        <Cultures />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/news",
    element: (
      <MainLayout bgColor="secondary" ContextProvider={MainPageContextProvider}>
        <News />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: (
      <MainLayout bgColor="secondary" ContextProvider={MainPageContextProvider}>
        <Projects />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <MainLayout bgColor="secondary" ContextProvider={MainPageContextProvider}>
        <Contact />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
];

export default mainNavigation;
