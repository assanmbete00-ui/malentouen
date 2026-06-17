import { useEffect, useState } from "react";

import { HEADER_CONFIG } from "../config/header_config";

export default function useHeader() {
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

  return {
    isSticky,
    drawerOpen,

    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
}