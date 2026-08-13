import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import MediaWithSkeleton from "@components/media_with_skeleton";
import NewsCard from "@components/news_card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { CommunityCultureSectionProps } from "./types";

export default function CommunityCulture({
  id,
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  items,
}: CommunityCultureSectionProps): ReactElement | null {
  if (!items.length) return null;

  const [featuredItem, ...secondaryItems] = items;

  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        action={
          <TextLink to={actionHref} sx={styles.headerAction}>
            {actionLabel}
          </TextLink>
        }
      />

      <Box sx={styles.layout}>
        <NewsCard
          image={featuredItem.image}
          imageAlt={featuredItem.imageAlt}
          category={featuredItem.category.label}
          date={featuredItem.formattedDate}
          title={featuredItem.title}
          description={featuredItem.excerpt}
          href={featuredItem.href}
          sx={styles.featured}
        />

        {secondaryItems.length > 0 && (
          <Box sx={styles.secondaryList}>
            {secondaryItems.map((item) => (
              <Box key={item.id} component={RouterLink} to={item.href} sx={styles.link}>
                <Box sx={styles.secondaryItem}>
                  <MediaWithSkeleton
                    src={item.image}
                    alt={item.imageAlt}
                    objectFit="cover"
                    objectPosition="center"
                    sx={styles.media}
                  />

                  <Box sx={styles.content}>
                    <Box sx={styles.meta}>
                      <Typography component="span" sx={styles.category}>
                        {item.category.label}
                      </Typography>

                      <Typography component="time" dateTime={item.publishedAt} sx={styles.date}>
                        {item.formattedDate}
                      </Typography>
                    </Box>

                    <Typography component="h3" sx={styles.title}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Section>
  );
}