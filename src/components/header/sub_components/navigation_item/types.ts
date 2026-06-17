import type { NavigationItemModel } from "@constants/navigation";

export type NavigationItemVariant = "desktop" | "mobile" | "footer" | "sidebar";

export type NavigationItemProps = {
  item: NavigationItemModel;
  variant?: NavigationItemVariant;
  onClick?: () => void;
};