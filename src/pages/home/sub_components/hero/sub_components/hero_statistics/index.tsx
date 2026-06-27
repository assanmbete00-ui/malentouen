import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { HeroStatisticsProps } from "./types";

export default function HeroStatistics({ statistics }: HeroStatisticsProps) {
  if (!statistics.length) return null;

  return (
    <Box sx={styles.container}>
      {statistics.map((item, index) => (
        <Box key={index} sx={styles.item}>
          <Typography sx={styles.value}>{item.value}</Typography>
          <Typography sx={styles.label}>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}