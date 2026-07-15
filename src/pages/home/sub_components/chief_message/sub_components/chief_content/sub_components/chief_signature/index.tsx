import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { ChiefSignatureProps } from "./types";

export default function ChiefSignature({ name, title }: ChiefSignatureProps) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.rule} />

      <Typography sx={styles.title}>{title}</Typography>

      <Typography sx={styles.name}>{name}</Typography>
    </Box>
  );
}
