import type { PreparedNavigationItem } from "@constants/navigation";

export type NavigationItemVariant = "desktop" | "mobile" | "footer"

export type NavigationItemProps = {
  item: PreparedNavigationItem;
  variant?: NavigationItemVariant;
  transparent?: boolean;
  onClick?: () => void;
};