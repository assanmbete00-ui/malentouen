import type { PreparedNavigationItem } from "@constants/navigation";
import type { HeaderLabels } from "../../hooks/use_header";

export type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  navigation: PreparedNavigationItem[];
  currentLanguage: "fr" | "en";
  onLanguageChange: (language: "fr" | "en") => void;
  showLanguageSelector: boolean;
  showAdminButton: boolean;
  labels: HeaderLabels;
};
