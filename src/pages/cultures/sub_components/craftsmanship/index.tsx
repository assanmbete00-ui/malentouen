import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { CraftsmanshipSectionProps } from "./types";

export default function Craftsmanship({
  id,
  eyebrow,
  title,
  description,
  items,
}: CraftsmanshipSectionProps):
  ReactElement | null {
  if (!items.length) {
    return null;
  }

  const [
    featured,
    ...remainingItems
  ] = items;

  const secondaryItems =
    remainingItems.slice(0, 2);

  const closingItem =
    remainingItems[2];

  return (
    <Section
      id={id}
      variant="paper"
      containerSize="wide"
    >
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="left"
      />

      <Box sx={styles.gallery}>
        <Box sx={styles.featured}>
          <MediaWithSkeleton
            src={featured.image}
            alt={featured.imageAlt}
            objectFit="cover"
            objectPosition="center"
            sx={styles.featuredMedia}
          />

          <Box sx={styles.featuredContent}>
            <Typography
              component="span"
              sx={styles.category}
            >
              {featured.category}
            </Typography>

            <Typography
              component="h3"
              variant="h4"
              sx={styles.title}
            >
              {featured.title}
            </Typography>

            <Typography
              variant="body1"
              sx={styles.description}
            >
              {featured.description}
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.secondary}>
          {secondaryItems.map((item) => (
            <Box
              key={item.id}
              sx={styles.secondaryItem}
            >
              <MediaWithSkeleton
                src={item.image}
                alt={item.imageAlt}
                objectFit="cover"
                objectPosition="center"
                sx={styles.secondaryMedia}
              />

              <Box>
                <Typography
                  component="span"
                  sx={styles.category}
                >
                  {item.category}
                </Typography>

                <Typography
                  component="h3"
                  variant="h5"
                  sx={styles.title}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={styles.description}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {closingItem && (
        <Box sx={styles.closing}>
          <MediaWithSkeleton
            src={closingItem.image}
            alt={closingItem.imageAlt}
            objectFit="cover"
            objectPosition="center"
            sx={styles.closingMedia}
          />

          <Box sx={styles.closingContent}>
            <Typography
              component="span"
              sx={styles.category}
            >
              {closingItem.category}
            </Typography>

            <Typography
              component="h3"
              variant="h4"
              sx={styles.title}
            >
              {closingItem.title}
            </Typography>

            <Typography
              variant="body1"
              sx={styles.description}
            >
              {closingItem.description}
            </Typography>
          </Box>
        </Box>
      )}
    </Section>
  );
}