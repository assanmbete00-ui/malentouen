import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { CultureContentProps } from "./types";

export default function CultureContent({
  eyebrow,
  title,
  description,
}: CultureContentProps) {
  return (
    <Box sx={styles.container}>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
      />

      <Typography sx={styles.description}>
        {description}
      </Typography>
    </Box>
  );
}