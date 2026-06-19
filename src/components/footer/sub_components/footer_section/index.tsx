import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { FooterSectionProps } from "./types";

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <Box sx={styles.container}>
      <Typography component="h3" sx={styles.title}>
        {title}
      </Typography>

      <Box sx={styles.content}>{children}</Box>
    </Box>
  );
}