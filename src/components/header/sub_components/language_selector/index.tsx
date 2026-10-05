import { Box } from "@mui/material";

import styles from "./styles";
import type { LanguageSelectorProps } from "./types";

export default function LanguageSelector({
  currentLanguage,
  onLanguageChange,
  frenchLabel,
  englishLabel,
  transparent = false,
}: LanguageSelectorProps) {
  const isFr = currentLanguage === "fr";

  return (
    <Box sx={styles.container(transparent)}>
      <Box
        component="button"
        type="button"
        aria-label={frenchLabel}
        aria-pressed={isFr}
        onClick={() => onLanguageChange("fr")}
        sx={styles.button(isFr, transparent)}
      >
        FR
      </Box>

      <Box component="span" aria-hidden="true" sx={styles.separator(transparent)}>
        |
      </Box>

      <Box
        component="button"
        type="button"
        aria-label={englishLabel}
        aria-pressed={!isFr}
        onClick={() => onLanguageChange("en")}
        sx={styles.button(!isFr, transparent)}
      >
        EN
      </Box>
    </Box>
  );
}