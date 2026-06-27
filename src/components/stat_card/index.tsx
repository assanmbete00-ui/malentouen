import { Box, Typography } from "@mui/material";

import Card from "@components/card";

import styles from "./styles";
import type { StatCardProps } from "./types";

export default function StatCard({
  value,
  label,
  description,
  icon,
  sx,
}: StatCardProps) {
  return (
    <Card sx={sx}>
      <Box sx={styles.container}>
        {icon && <Box sx={styles.iconWrapper}>{icon}</Box>}

        <Typography sx={styles.value}>
          {value}
        </Typography>

        <Typography sx={styles.label}>
          {label}
        </Typography>

        {description && (
          <Typography sx={styles.description}>
            {description}
          </Typography>
        )}
      </Box>
    </Card>
  );
}