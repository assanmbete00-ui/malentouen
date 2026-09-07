import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { FooterBottomProps } from "./types";

export default function FooterBottom({ copyright, motto }: FooterBottomProps) {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.copyright}>{copyright}</Typography>

      <Typography sx={styles.motto}>{motto}</Typography>
    </Box>
  );
}
