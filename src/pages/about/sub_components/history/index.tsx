import type { ReactElement } from "react";

import { Box, Typography } from "@mui/material";

import Badge from "@components/badge";
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
}: HistorySectionProps): ReactElement {
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

      <Box sx={styles.hero}>
        <Box
          component="img"
          src={image}
          alt={imageAlt}
          sx={styles.image}
        />

        <Box sx={styles.introduction}>
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
      </Box>

      <Box sx={styles.chapters}>
        {timeline.map((item, index) => (
          <Box
            key={item.id}
            sx={styles.chapter}
          >
            {index > 0 && (
              <Box sx={styles.separator} />
            )}

            <Badge>
              {item.period}
            </Badge>

            <Typography
              variant="h4"
              sx={styles.chapterTitle}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              sx={styles.chapterDescription}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}