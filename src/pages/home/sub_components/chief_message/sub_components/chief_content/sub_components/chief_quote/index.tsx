import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { ChiefQuoteProps } from "./types";

export default function ChiefQuote({
  children,
}: ChiefQuoteProps) {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.quote}>
        "{children}"
      </Typography>
    </Box>
  );
}