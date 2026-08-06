import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

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
    <Section
      id={id}
      variant="default"
      containerSize="wide"
    >
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="center"
      />

      <Box sx={styles.media}>
        <Box
          component="img"
          src={image}
          alt={imageAlt}
          sx={styles.image}
        />
      </Box>

      <Box sx={styles.content}>
        <Box sx={styles.block}>
          <Box sx={styles.accent} />

          <Typography
            component="h3"
            variant="h3"
            sx={styles.blockTitle}
          >
            {mission.title}
          </Typography>

          <Box sx={styles.descriptions}>
            <Typography
              variant="body1"
              sx={styles.blockDescription}
            >
              {mission.description}
            </Typography>

            {mission.descriptionSecondary && (
              <Typography
                variant="body1"
                sx={styles.blockDescription}
              >
                {mission.descriptionSecondary}
              </Typography>
            )}
          </Box>
        </Box>

        <Box
          sx={[
            styles.block,
            styles.visionBlock,
          ]}
        >
          <Box sx={styles.accent} />

          <Typography
            component="h3"
            variant="h3"
            sx={styles.blockTitle}
          >
            {vision.title}
          </Typography>

          <Box sx={styles.descriptions}>
            <Typography
              variant="body1"
              sx={styles.blockDescription}
            >
              {vision.description}
            </Typography>

            {vision.descriptionSecondary && (
              <Typography
                variant="body1"
                sx={styles.blockDescription}
              >
                {vision.descriptionSecondary}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}