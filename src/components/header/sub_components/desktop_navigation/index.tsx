import { Box } from "@mui/material";

import { NAVIGATION_ITEMS } from "@constants/navigation";
import NavigationItem from "../navigation_item";

import styles from "./styles";
import type { DesktopNavigationProps } from "./types";

export default function DesktopNavigation({
  compact = false,
}: DesktopNavigationProps) {
  return (
    <Box component="nav" sx={styles.container}>
      {NAVIGATION_ITEMS.filter((item) => item.visible).map((item) => (
        <NavigationItem key={item.id} item={item} variant="desktop" />
      ))}
    </Box>
  );
}