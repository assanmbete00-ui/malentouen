import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { LanguageSelectorProps } from "./types";

export default function LanguageSelector({
  compact = false,
}: LanguageSelectorProps) {
  return (
    <Box sx={styles.container}>
      <Typography component="button" sx={styles.language(true)}>
        FR
      </Typography>

      <Typography component="span" sx={styles.separator}>
        |
      </Typography>

      <Typography component="button" sx={styles.language(false)}>
        EN
      </Typography>
    </Box>
  );
}