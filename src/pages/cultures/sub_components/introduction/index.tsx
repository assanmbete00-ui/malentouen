import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { CulturesIntroductionProps } from "./types";

export default function Introduction({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  descriptionSecondary,
}: CulturesIntroductionProps): ReactElement {
  return (
    <Section
      id={id}
      variant="default"
      containerSize="wide"
    >
      <Box sx={styles.content}>
        <Box sx={styles.editorial}>
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            align="left"
          />

          <Box sx={styles.descriptions}>
            <Typography
              variant="body1"
              sx={styles.description}
            >
              {description}
            </Typography>

            {descriptionSecondary && (
              <Typography
                variant="body1"
                sx={styles.description}
              >
                {descriptionSecondary}
              </Typography>
            )}
          </Box>

          <Box
            aria-hidden="true"
            sx={styles.accent}
          />
        </Box>

        <MediaWithSkeleton
          src={image}
          alt={imageAlt}
          objectFit="cover"
          objectPosition="center"
          sx={styles.media}
        />
      </Box>
    </Section>
  );
}