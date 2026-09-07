import { Box } from "@mui/material";

import NavigationItem from "../navigation_item";

import styles from "./styles";
import type { DesktopNavigationProps } from "./types";

export default function DesktopNavigation({
  compact = false,
  items,
}: DesktopNavigationProps) {
  return (
    <Box component="nav" sx={styles.container}>
      {items.map((item) => (
        <NavigationItem key={item.id} item={item} variant="desktop" />
      ))}
    </Box>
  );
}
