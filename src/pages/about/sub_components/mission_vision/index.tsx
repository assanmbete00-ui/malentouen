import type { ReactElement } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { MissionVisionSectionProps } from "./types";

export default function MissionVision({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  mission,
  vision,
}: MissionVisionSectionProps): ReactElement {
  return (
    <Section id={id} variant="default" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="center"
      />

      <Box sx={styles.content}>
        <Card sx={styles.block}>
          <CardContent>
            <Typography variant="h4" sx={styles.blockTitle}>
              {mission.title}
            </Typography>

            <Typography variant="body1" sx={styles.blockDescription}>
              {mission.description}
            </Typography>

            {mission.descriptionSecondary && (
              <Typography variant="body1" sx={styles.blockDescription}>
                {mission.descriptionSecondary}
              </Typography>
            )}
          </CardContent>
        </Card>

        <Card sx={styles.block}>
          <CardContent>
            <Typography variant="h4" sx={styles.blockTitle}>
              {vision.title}
            </Typography>

            <Typography variant="body1" sx={styles.blockDescription}>
              {vision.description}
            </Typography>

            {vision.descriptionSecondary && (
              <Typography variant="body1" sx={styles.blockDescription}>
                {vision.descriptionSecondary}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>

      <Box sx={styles.imageWrapper}>
        <Box component="img" src={image} alt={imageAlt} sx={styles.image} />
      </Box>
    </Section>
  );
}
