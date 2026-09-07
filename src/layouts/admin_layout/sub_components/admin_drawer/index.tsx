import { Box, Drawer } from "@mui/material";

import AdminSidebar from "../admin_sidebar";

import * as styles from "./styles";
import type { AdminDrawerProps } from "./types";

export default function AdminDrawer({ open, onClose }: AdminDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
      sx={styles.drawer}
    >
      <Box onClick={onClose}>
        <AdminSidebar />
      </Box>
    </Drawer>
  );
}
