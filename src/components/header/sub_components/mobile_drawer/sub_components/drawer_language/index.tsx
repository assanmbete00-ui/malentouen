import { Box, Typography } from "@mui/material";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

import styles from "./styles";
import type { DrawerLanguageProps } from "./types";

export default function DrawerLanguage({
  currentLanguage = "fr",
  onLanguageChange,
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
        Langue
      </Typography>

      <Typography
        sx={styles.item(currentLanguage === "fr")}
        onClick={() => onLanguageChange?.("fr")}
      >
        Français
      </Typography>

      <Typography
        sx={styles.item(currentLanguage === "en")}
        onClick={() => onLanguageChange?.("en")}
      >
        English
      </Typography>
    </Box>
  );
}