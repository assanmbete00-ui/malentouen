import { Box } from "@mui/material";

import styles from "./styles";
import type { LanguageSelectorProps } from "./types";

export default function LanguageSelector({
  currentLanguage,
  onLanguageChange,
  frenchLabel,
  englishLabel,
}: LanguageSelectorProps) {
  const isFr = currentLanguage === "fr";

  return (
    <Box sx={styles.container}>
      <Box
        component="button"
        type="button"
        aria-label={frenchLabel}
        aria-pressed={isFr}
        onClick={() => onLanguageChange("fr")}
        sx={styles.button(isFr)}
      >
        FR
      </Box>

      <Box component="span" aria-hidden="true" sx={styles.separator}>
        |
      </Box>

      <Box
        component="button"
        type="button"
        aria-label={englishLabel}
        aria-pressed={!isFr}
        onClick={() => onLanguageChange("en")}
        sx={styles.button(!isFr)}
      >
        EN
      </Box>
    </Box>
  );
}
