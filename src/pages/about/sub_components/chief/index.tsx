import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import styles from "./styles";
import type { ChiefSectionProps } from "./types";

export default function Chief({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  descriptionSecondary,
  signature,
}: ChiefSectionProps): ReactElement {
  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle eyebrow={eyebrow} title={title} />

      <Box sx={styles.content}>
        <Box sx={styles.body}>
          <Box sx={styles.descriptions}>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {descriptionSecondary}
            </Typography>
          </Box>

          <Box sx={styles.signature}>
            <Typography variant="h5" sx={styles.signatureName}>
              {signature.name}
            </Typography>

            <Typography variant="body1" sx={styles.signatureTitle}>
              {signature.title}
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.imageWrapper}>
          <MediaWithSkeleton src={image} alt={imageAlt} sx={styles.image} />
        </Box>
      </Box>
    </Section>
  );
}
