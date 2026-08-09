import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@components/card";
import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { HeritageLandmarksSectionProps } from "./types";

export default function HeritageLandmarks({
  id,
  eyebrow,
  title,
  description,
  items,
}: HeritageLandmarksSectionProps): ReactElement | null {
  if (!items.length) {
    return null;
  }

  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="center"
      />

      <Box sx={styles.grid}>
        {items.map((item) => (
          <Card key={item.id} variant="default" sx={styles.card}>
            <Box sx={styles.imageWrapper}>
              <MediaWithSkeleton
                src={item.image}
                alt={item.imageAlt}
                sx={styles.image}
              />
            </Box>

            <Box sx={styles.content}>
              <Typography component="h3" variant="h5" sx={styles.title}>
                {item.title}
              </Typography>

              <Typography variant="body2" sx={styles.description}>
                {item.description}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Section>
  );
}
