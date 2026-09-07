import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

import styles from "./styles";
import type { NavigationItemProps } from "./types";

export default function NavigationItem({
  item,
  variant = "desktop",
  onClick,
}: NavigationItemProps) {
  const isActive = Boolean(item.active);

  if (item.external) {
    return (
      <Box
        component="a"
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
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
      aria-current={isActive ? "page" : undefined}
      sx={styles.item(isActive, variant)}
    >
      {item.label}
    </Box>
  );
}
