import { Box, Typography, Tooltip } from "@mui/material";
import { Sun, Moon, UserCircle, Menu } from "lucide-react";

import useAdminTopbar from "./hooks/use_admin_topbar";
import * as styles from "./styles";
import type { AdminTopbarProps } from "./types";

export default function AdminTopbar({ onMenuOpen, pageTitle }: AdminTopbarProps) {
  const { isLightMode, toggleTheme, menuLabel, menuAriaLabel, themeLabel, themeAriaLabel } =
    useAdminTopbar();

  return (
    <Box component="header" sx={styles.root}>
      <Box sx={styles.left}>
        <Tooltip title={menuLabel} placement="bottom">
          <Box
            component="button"
            sx={styles.mobileMenuButton}
            onClick={onMenuOpen}
            aria-label={menuAriaLabel}
          >
            <Menu size={20} />
          </Box>
        </Tooltip>

        {pageTitle && (
          <Typography variant="h6" sx={styles.pageTitle}>
            {pageTitle}
          </Typography>
        )}
      </Box>

      <Box sx={styles.right}>
        <Tooltip title={themeLabel} placement="bottom">
          <Box
            component="button"
            sx={styles.iconButton}
            onClick={toggleTheme}
            aria-label={themeAriaLabel}
          >
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </Box>
        </Tooltip>

        <Box sx={styles.userZone}>
          <Box sx={styles.avatar} aria-hidden="true">
            <UserCircle size={18} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
