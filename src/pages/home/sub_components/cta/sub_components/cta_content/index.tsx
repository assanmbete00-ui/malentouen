import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { CTAContentProps } from "./types";

export default function CTAContent({
  title,
  description,
}: CTAContentProps) {
  return (
    <Box sx={styles.container}>
      <Typography
        component="h2"
        sx={styles.title}
      >
        {title}
      </Typography>

      <Typography sx={styles.description}>
        {description}
      </Typography>
    </Box>
  );
}