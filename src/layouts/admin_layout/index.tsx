import { Box } from "@mui/material";

import AdminThemeProvider from "@theme/AdminThemeProvider";

import useAdminLayout from "./hooks/use_admin_layout";
import AdminSidebar from "./sub_components/admin_sidebar";
import AdminDrawer from "./sub_components/admin_drawer";
import AdminTopbar from "./sub_components/admin_topbar";
import * as styles from "./styles";
import type { AdminLayoutProps } from "./types";

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { drawerOpen, openDrawer, closeDrawer } = useAdminLayout();

  return (
    <AdminThemeProvider>
      <Box sx={styles.shell}>
        <Box sx={styles.sidebarDesktop}>
          <AdminSidebar />
        </Box>

        <AdminDrawer open={drawerOpen} onClose={closeDrawer} />

        <Box sx={styles.mainColumn}>
          <AdminTopbar onMenuOpen={openDrawer} />
          <Box component="main" sx={styles.content}>
            {children}
          </Box>
        </Box>
      </Box>
    </AdminThemeProvider>
  );
}
