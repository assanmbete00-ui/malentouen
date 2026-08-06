import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import Badge from "@components/badge";
import MediaWithSkeleton from "@components/media_with_skeleton";
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
        align="left"
      />

      <Box sx={styles.hero}>
        <MediaWithSkeleton
          src={image}
          alt={imageAlt}
          objectFit="cover"
          objectPosition="center"
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

      {timeline.length > 0 && (
        <Box sx={styles.chapters}>
          {timeline.map((item, index) => (
            <Box
              key={item.id}
              sx={styles.chapter}
            >
              {index > 0 && (
                <Box
                  aria-hidden="true"
                  sx={styles.separator}
                />
              )}

              <Badge variant="secondary">
                {item.period}
              </Badge>

              <Typography
                component="h3"
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
      )}
    </Section>
  );
}