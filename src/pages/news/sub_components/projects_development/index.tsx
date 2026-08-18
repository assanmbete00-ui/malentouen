import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { ProjectsDevelopmentSectionProps } from "./types";

export default function ProjectsDevelopment({
  id,
  eyebrow, 
  title,
  description,
  actionLabel,
  actionHref,
  items,
}: ProjectsDevelopmentSectionProps): ReactElement | null {
  if (!items.length) return null;

  return (
    <Section id={id} variant="default" containerSize="wide">
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

      <Box sx={styles.grid}>
        {items.map((item, index) => {
          const isLastOddItem = items.length % 2 !== 0 && index === items.length - 1;

          return (
            <Box
              key={item.id}
              component="article"
              sx={isLastOddItem ? styles.featuredArticle : styles.article}
            >
              <MediaWithSkeleton
                src={item.image}
                alt={item.imageAlt}
                objectFit="cover"
                objectPosition="center"
                sx={isLastOddItem ? styles.featuredMedia : styles.media}
              />

              <Box sx={styles.body}>
                <Box sx={isLastOddItem ? styles.featuredMeta : styles.meta}>
                  <Typography component="span" sx={styles.category}>
                    {item.category.label}
                  </Typography>

                  <Typography component="time" dateTime={item.publishedAt} sx={styles.date}>
                    {item.formattedDate}
                  </Typography>
                </Box>

                <Typography component="h3" sx={isLastOddItem ? styles.featuredTitle : styles.title}>
                  {item.title}
                </Typography>

                <Typography sx={styles.excerpt}>
                  {item.excerpt}
                </Typography>

                <TextLink to={item.href} sx={styles.link}>
                  {actionLabel}
                </TextLink>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
}