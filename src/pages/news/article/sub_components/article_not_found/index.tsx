import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { ArticleNotFoundProps } from "./types";

export default function ArticleNotFound({
  title,
  description,
  actionLabel,
  actionHref,
}: ArticleNotFoundProps) {
  return (
    <Section id="news-article-not-found" variant="default">
      <Box sx={styles.content}>
        <Typography component="h1" variant="h2">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Box sx={styles.footer}>
          <TextLink to={actionHref}>{actionLabel}</TextLink>
        </Box>
      </Box>
    </Section>
  );
}
