import { useState } from "react";

type UseAdminLayoutReturn = {
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

export default function useAdminLayout(): UseAdminLayoutReturn {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return {
    drawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
  };
}
