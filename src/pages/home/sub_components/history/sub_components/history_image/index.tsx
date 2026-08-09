import { Box } from "@mui/material";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { HistoryImageProps } from "./types";

export default function HistoryImage({ image }: HistoryImageProps) {
  return (
    <Box sx={styles.container}>
      <MediaWithSkeleton
        src={image}
        alt="Histoire de la Chefferie Traditionnelle de Malentouen"
        sx={styles.image}
      />
    </Box>
  );
}
