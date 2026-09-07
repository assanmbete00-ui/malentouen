import { type RouteObject } from "react-router-dom";

import ErrorPage from "@pages/error";

import MainLayout from "@layouts/main_layout";
import { MainPageContextProvider } from "@contexts/page_context/main/main_page_context";

import Home from "@pages/home";
import About from "@pages/about";
import Events from "@pages/events";
import Cultures from "@pages/cultures";
import News from "@pages/news";
import NewsArticle from "@pages/news/article";
import Projects from "@pages/projects";
import Partners from "@pages/partners";
import Contact from "@pages/contact";

const mainNavigation: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <Home />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <About />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/events",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <Events />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cultures",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <Cultures />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/news",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <News />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/news/:slug",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <NewsArticle />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <Projects />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/partners",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <Partners />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <MainLayout
        bgColor="secondary"
        ContextProvider={MainPageContextProvider}
        disableContainer
      >
        <Contact />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
];

export default mainNavigation;
