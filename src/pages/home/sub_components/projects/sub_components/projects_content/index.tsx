import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ProjectsContentProps } from "./types";

export default function ProjectsContent({
  eyebrow,
  title,
  description,
}: ProjectsContentProps) {
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