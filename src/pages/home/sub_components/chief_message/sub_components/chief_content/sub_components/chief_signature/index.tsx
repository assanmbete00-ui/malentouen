import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { ChiefSignatureProps } from "./types";

export default function ChiefSignature({
  name,
  title,
}: ChiefSignatureProps) {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.name}>
        {name}
      </Typography>

      <Typography sx={styles.title}>
        {title}
      </Typography>
    </Box>
  );
}