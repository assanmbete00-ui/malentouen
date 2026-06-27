import { Box, Typography } from "@mui/material";

import Badge from "@components/badge";

import HeroActions from "./sub_components/hero_actions";

import styles from "./styles";
import type { HeroContentProps } from "./types";

export default function HeroContent({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
}: HeroContentProps) {
  return (
    <Box sx={styles.container}>
      <Badge variant="secondary">{badge}</Badge>

      <Typography variant="h1" sx={styles.title}>
        {title}
      </Typography>

      <Typography sx={styles.description}>
        {description}
      </Typography>

      <HeroActions
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
    </Box>
  );
}