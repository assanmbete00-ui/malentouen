import type { HeaderLabels } from "../../hooks/use_header";

export type HeaderActionsProps = {
  compact?: boolean;
  showLanguageSelector: boolean;
  showSearchButton: boolean;
  showAdminButton: boolean;
  transparent?: boolean;
  currentLanguage: "fr" | "en";
  onLanguageChange: (language: "fr" | "en") => void;
  labels: HeaderLabels;
};
