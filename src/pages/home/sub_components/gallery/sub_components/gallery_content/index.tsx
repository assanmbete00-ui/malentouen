import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { GalleryContentProps } from "./types";

export default function GalleryContent({
  eyebrow,
  title,
  description,
}: GalleryContentProps) {
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