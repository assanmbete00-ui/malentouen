import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import useAdminSidebar from "./hooks/use_admin_sidebar";
import * as styles from "./styles";

export default function AdminSidebar() {
  const { brandInitial, brandName, brandSubtitle, navAriaLabel, groups } =
    useAdminSidebar();

  return (
    <Box component="nav" sx={styles.root} aria-label={navAriaLabel}>
      <Box sx={styles.brand}>
        <Box sx={styles.emblem} aria-hidden="true">
          {brandInitial}
        </Box>
        <Box sx={styles.brandText}>
          <Typography component="span" sx={styles.brandName}>
            {brandName}
          </Typography>
          <Typography component="span" sx={styles.brandSubtitle}>
            {brandSubtitle}
          </Typography>
        </Box>
      </Box>

      <Box sx={styles.nav}>
        {groups.map((group) => (
          <Box key={group.id}>
            <Typography sx={styles.groupLabel}>{group.label}</Typography>

            {group.items.map(({ id, label, path, Icon, active }) => (
              <Box
                key={id}
                component={Link}
                to={path}
                sx={styles.navItem(active)}
                aria-current={active ? "page" : undefined}
              >
                <Box sx={styles.navIcon(active)}>
                  <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
                </Box>
                <Typography sx={styles.navLabel}>{label}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
