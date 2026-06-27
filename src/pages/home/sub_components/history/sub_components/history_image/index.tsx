import { Box } from "@mui/material";

import styles from "./styles";
import type { HistoryImageProps } from "./types";

export default function HistoryImage({ image }: HistoryImageProps) {
  return (
    <Box sx={styles.container}>
      <Box
        component="img"
        src={image}
        alt="Histoire de la Chefferie Traditionnelle de Malentouen"
        sx={styles.image}
      />
    </Box>
  );
}