import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useTranslate from "@hooks/use_translate";

import { HEADER_CONFIG } from "../config/header_config";
import {
  isNavigationItemActive,
  NAVIGATION_ITEMS,
  supportsTransparentHeader,
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
  const [isHovered, setIsHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!HEADER_CONFIG.ENABLE_STICKY) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > HEADER_CONFIG.SCROLL_TRIGGER);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setIsHovered(false);
  }, [pathname]);

  const openDrawer = () => setDrawerOpen(true);

  const closeDrawer = () => setDrawerOpen(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleMouseEnter = () => {
    if (HEADER_CONFIG.ENABLE_SOLID_ON_HOVER) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (HEADER_CONFIG.ENABLE_SOLID_ON_HOVER) setIsHovered(false);
  };

  const canUseTransparentHeader = supportsTransparentHeader(pathname);

  const isTransparent =
    HEADER_CONFIG.ENABLE_TRANSPARENT_HEADER &&
    canUseTransparentHeader &&
    !isSticky &&
    !isHovered &&
    !drawerOpen;

  const isSolid = !isTransparent;

  const navigation: PreparedNavigationItem[] = NAVIGATION_ITEMS.filter(
    (item) => item.visible !== false,
  ).map((item) => ({
    ...item,
    label: translate(item.labelKey),
    active: isNavigationItemActive(pathname, item.path),
  }));

  return {
    isHomePage: pathname === "/",
    isSticky,
    isHovered,
    isTransparent,
    isSolid,
    drawerOpen,

    openDrawer,
    closeDrawer,
    toggleDrawer,
    handleMouseEnter,
    handleMouseLeave,

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