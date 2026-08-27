import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { ArticleContentProps } from "./types";

export default function ArticleContent({
  excerpt,
  image,
  imageAlt,
  categoryLabel,
  publishedAt,
  formattedDate,
  actionLabel,
  actionHref,
}: ArticleContentProps) {
  return (
    <Section id="news-article-content" spacing="default">
      <Box sx={styles.content}>
        <Box sx={styles.meta}>
          <Typography component="span" sx={styles.category}>
            {categoryLabel}
          </Typography>
          <Box aria-hidden="true" sx={styles.separator} />
          <Typography component="time" dateTime={publishedAt} sx={styles.date}>
            {formattedDate}
          </Typography>
        </Box>

        <Box sx={styles.mediaFrame}>
          <MediaWithSkeleton
            src={image}
            alt={imageAlt}
            objectFit="cover"
            objectPosition="center"
            sx={styles.media}
          />
        </Box>

        <Box sx={styles.readingContent}>
          <Typography component="div" sx={styles.excerpt}>
            {excerpt}
          </Typography>

          <Box sx={styles.footer}>
            <TextLink to={actionHref}>{actionLabel}</TextLink>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
