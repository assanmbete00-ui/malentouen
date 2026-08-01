import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { HistorySectionProps } from "./types";

export default function History({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  descriptionSecondary,
  timeline,
}: HistorySectionProps) {
  return (
    <Section
      id={id}
      variant="paper"
      containerSize="wide"
    >
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
      />

      <Box sx={styles.content}>
        <Box sx={styles.editorial}>
          <Box sx={styles.descriptions}>
            <Typography variant="body1" sx={styles.description}>
              {description}
            </Typography>

            {descriptionSecondary && (
              <Typography variant="body1" sx={styles.description}>
                {descriptionSecondary}
              </Typography>
            )}
          </Box>
        </Box>

        <Box sx={styles.media}>
          <Box
            component="img"
            src={image}
            alt={imageAlt}
            sx={styles.image}
          />
        </Box>
      </Box>

      {timeline.length > 0 && (
        <Box sx={styles.timeline}>
          {timeline.map((item) => (
            <Box key={item.id} sx={styles.timelineItem}>
              <Typography component="p" sx={styles.period}>
                {item.period}
              </Typography>

              <Box sx={styles.timelineContent}>
                <Typography
                  component="h3"
                  variant="h5"
                  sx={styles.timelineTitle}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={styles.timelineDescription}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Section>
  );
}