import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useTranslate from "@hooks/use_translate";

import { HEADER_CONFIG } from "../config/header_config";
import {
  isNavigationItemActive,
  NAVIGATION_ITEMS,
  type PreparedNavigationItem,
} from "@constants/navigation";

export type HeaderLabels = {
  admin: string;
  search: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  french: string;
  english: string;
};

export default function useHeader() {
  const { pathname } = useLocation();
  const { currentLanguage, changeLanguage, translate } = useTranslate();
  const language: "fr" | "en" = currentLanguage.startsWith("en") ? "en" : "fr";
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!HEADER_CONFIG.ENABLE_STICKY) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > HEADER_CONFIG.SCROLL_TRIGGER);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDrawer = () => setDrawerOpen(true);

  const closeDrawer = () => setDrawerOpen(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navigation: PreparedNavigationItem[] = NAVIGATION_ITEMS.filter(
    (item) => item.visible !== false,
  ).map((item) => ({
    ...item,
    label: translate(item.labelKey),
    active: isNavigationItemActive(pathname, item.path),
  }));

  return {
    isSticky,
    drawerOpen,

    openDrawer,
    closeDrawer,
    toggleDrawer,
    navigation,
    currentLanguage: language,
    changeLanguage,
    labels: {
      admin: translate("HEADER_ADMINISTRATION"),
      search: translate("HEADER_SEARCH"),
      openMenu: translate("HEADER_OPEN_MENU"),
      closeMenu: translate("HEADER_CLOSE_MENU"),
      language: translate("HEADER_LANGUAGE"),
      french: translate("LANGUAGE_FRENCH"),
      english: translate("LANGUAGE_ENGLISH"),
    },
  };
}
