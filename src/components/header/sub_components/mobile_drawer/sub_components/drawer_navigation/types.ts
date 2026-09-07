import type { PreparedNavigationItem } from "@constants/navigation";

export type DrawerNavigationProps = {
  items: PreparedNavigationItem[];
  onItemClick?: () => void;
};
