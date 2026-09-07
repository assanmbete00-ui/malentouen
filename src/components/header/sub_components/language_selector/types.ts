export type LanguageSelectorProps = {
  currentLanguage: "fr" | "en";
  onLanguageChange: (language: "fr" | "en") => void;
  frenchLabel: string;
  englishLabel: string;
};
