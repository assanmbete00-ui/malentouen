import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { TransmissionSectionProps } from "./types";

export default function Transmission({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  descriptionSecondary,
  action,
}: TransmissionSectionProps): ReactElement {
  return (
    <Section
      id={id}
      variant="default"
      containerSize="wide"
    >
      <Box sx={styles.content}>
        <Box sx={styles.visual}>
          <MediaWithSkeleton
            src={image}
            alt={imageAlt}
            objectFit="cover"
            objectPosition="center"
            sx={styles.media}
          />
        </Box>

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

          {action && (
            <TextLink to={action.href} sx={styles.action}>
              {action.label}
            </TextLink>
          )}
        </Box>
      </Box>
    </Section>
  );
}