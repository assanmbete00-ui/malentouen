import type { PreparedNavigationItem } from "@constants/navigation";

export type DesktopNavigationProps = {
  compact?: boolean;
  transparent?: boolean;
  items: PreparedNavigationItem[];
};