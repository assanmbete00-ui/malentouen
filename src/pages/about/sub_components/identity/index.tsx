import { Box, Typography } from "@mui/material";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { IdentitySectionProps } from "./types";

export default function Identity({
  eyebrow,
  title,
  description,
  descriptionSecondary,
  image,
  imageAlt,
  highlights,
}: IdentitySectionProps) {
  return (
    <Section id="identity">

      <SectionTitle
        eyebrow={eyebrow}
        title={title}
      />

      <Box sx={styles.content}>

        <Box sx={styles.imageWrapper}>
          <Box
            component="img"
            src={image}
            alt={imageAlt}
            sx={styles.image}
          />
        </Box>

        <Box sx={styles.body}>

          <Box sx={styles.descriptions}>

            <Typography
              variant="body1"
              color="text.secondary"
            >
              {description}
            </Typography>

            {descriptionSecondary && (
              <Typography
                variant="body1"
                color="text.secondary"
              >
                {descriptionSecondary}
              </Typography>
            )}

          </Box>

          <Box sx={styles.highlights}>

            {highlights.map((highlight) => (
              <Box
                key={highlight.id}
                sx={styles.highlight}
              >
                <Typography
                  variant="h6"
                  sx={styles.highlightTitle}
                >
                  {highlight.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={styles.highlightDescription}
                >
                  {highlight.description}
                </Typography>
              </Box>
            ))}

          </Box>

        </Box>

      </Box>

    </Section>
  );
}   

