import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { HistoryTimelineProps } from "./types";

export default function HistoryTimeline({ items }: HistoryTimelineProps) {
  if (!items.length) return null;

  return (
    <Box sx={styles.container}>
      {items.map((item) => (
        <Box key={item.id} sx={styles.item}>
          <Typography sx={styles.period}>{item.period}</Typography>
          <Typography sx={styles.title}>{item.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}