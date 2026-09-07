import type { PreparedNavigationItem } from "@constants/navigation";

export type NavigationItemVariant = "desktop" | "mobile" | "footer" | "sidebar";

export type NavigationItemProps = {
  item: PreparedNavigationItem;
  variant?: NavigationItemVariant;
  onClick?: () => void;
};
