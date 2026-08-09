import { Box } from "@mui/material";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { ChiefPortraitProps } from "./types";

export default function ChiefPortrait({ image }: ChiefPortraitProps) {
  return (
    <Box sx={styles.container}>
      <MediaWithSkeleton
        src={image}
        alt="Chef Traditionnel de Malentouen"
        sx={styles.image}
      />
    </Box>
  );
}
