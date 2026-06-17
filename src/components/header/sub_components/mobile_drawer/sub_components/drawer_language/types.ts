export type DrawerLanguageProps = {
  currentLanguage?: "fr" | "en";
  onLanguageChange?: (language: "fr" | "en") => void;
};