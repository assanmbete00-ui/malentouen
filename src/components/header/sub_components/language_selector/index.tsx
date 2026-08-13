import { Box } from "@mui/material";

import useTranslate from "@hooks/use_translate";

import styles from "./styles";

export default function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useTranslate();

  const isFr = currentLanguage.startsWith("fr");

  return (
    <Box sx={styles.container}>
      <Box
        component="button"
        type="button"
        aria-label="Passer en français"
        aria-pressed={isFr}
        onClick={() => changeLanguage("fr")}
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
        aria-label="Switch to English"
        aria-pressed={!isFr}
        onClick={() => changeLanguage("en")}
        sx={styles.button(!isFr)}
      >
        EN
      </Box>
    </Box>
  );
}
