import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import styles from "./styles";
import type { NavigationItemProps } from "./types";

export default function NavigationItem({
  item,
  variant = "desktop",
  onClick,
}: NavigationItemProps) {
  const { pathname } = useLocation();

  const isActive =
    item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

  if (item.external) {
    return (
      <Box
        component="a"
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        sx={styles.item(isActive, variant)}
      >
        {item.label}
      </Box>
    );
  }

  return (
    <Box
      component={RouterLink}
      to={item.path}
      onClick={onClick}
      sx={styles.item(isActive, variant)}
    >
      {item.label}
    </Box>
  );
}