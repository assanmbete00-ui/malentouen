import { Box, Typography } from "@mui/material";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

import styles from "./styles";
import type { DrawerLanguageProps } from "./types";

export default function DrawerLanguage({
  currentLanguage = "fr",
  onLanguageChange,
  title,
  frenchLabel,
  englishLabel,
}: DrawerLanguageProps) {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>
        <LanguageRoundedIcon
          sx={{
            mr: 1,
            fontSize: 18,
            verticalAlign: "middle",
          }}
        />
        {title}
      </Typography>

      <Box
        component="button"
        type="button"
        aria-pressed={currentLanguage === "fr"}
        onClick={() => onLanguageChange?.("fr")}
        sx={styles.item(currentLanguage === "fr")}
      >
        {frenchLabel}
      </Box>

      <Box
        component="button"
        type="button"
        aria-pressed={currentLanguage === "en"}
        onClick={() => onLanguageChange?.("en")}
        sx={styles.item(currentLanguage === "en")}
      >
        {englishLabel}
      </Box>
    </Box>
  );
}
