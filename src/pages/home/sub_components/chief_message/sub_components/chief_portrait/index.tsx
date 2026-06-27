import { Box } from "@mui/material";

import styles from "./styles";
import type { ChiefPortraitProps } from "./types";

export default function ChiefPortrait({
  image,
}: ChiefPortraitProps) {
  return (
    <Box sx={styles.container}>
      <Box
        component="img"
        src={image}
        alt="Chef Traditionnel de Malentouen"
        sx={styles.image}
      />
    </Box>
  );
}