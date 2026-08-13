import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { FeaturedNewsSectionProps } from "./types";

export default function FeaturedNews({
  id,
  eyebrow,
  title,
  description,
  actionLabel,
  article,
}: FeaturedNewsSectionProps): ReactElement {
  return (
    <Section id={id} variant="default" containerSize="wide">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={description} align="left" />

      <Box sx={styles.content}>
        <MediaWithSkeleton
          src={article.image}
          alt={article.imageAlt}
          objectFit="cover"
          objectPosition="center"
          sx={styles.media}
        />

        <Box sx={styles.editorial}>
          <Box sx={styles.meta}>
            <Typography component="span" sx={styles.category}>
              {article.category.label}
            </Typography>

            <Box aria-hidden="true" sx={styles.separator} />

            <Typography component="time" dateTime={article.publishedAt} sx={styles.date}>
              {article.formattedDate}
            </Typography>
          </Box>

          <Typography component="h3" sx={styles.title}>
            {article.title}
          </Typography>

          <Typography variant="body1" sx={styles.excerpt}>
            {article.excerpt}
          </Typography>

          <TextLink to={article.href} sx={styles.link}>
            {actionLabel}
          </TextLink>
        </Box>
      </Box>
    </Section>
  );
}