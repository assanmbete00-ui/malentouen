export type DrawerLanguageProps = {
  currentLanguage?: "fr" | "en";
  onLanguageChange?: (language: "fr" | "en") => void;
  title: string;
  frenchLabel: string;
  englishLabel: string;
};
