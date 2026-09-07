import { Box } from "@mui/material";

import NavigationItem from "../../../navigation_item";

import styles from "./styles";
import type { DrawerNavigationProps } from "./types";

export default function DrawerNavigation({
  items,
  onItemClick,
}: DrawerNavigationProps) {
  return (
    <Box component="nav" sx={styles.container}>
      {items.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          variant="mobile"
          onClick={onItemClick}
        />
      ))}
    </Box>
  );
}
