import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import Card from "@components/card";
import CultureCard from "@components/culture_card";
import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { TraditionsRitesSectionProps } from "./types";

export default function TraditionsRites({
  id,
  eyebrow,
  title,
  description,
  items,
}: TraditionsRitesSectionProps):
  ReactElement | null {
  if (!items.length) {
    return null;
  }

  const [featured, ...secondaryItems] = items;

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

      <Box sx={styles.content}>
        <Card
          variant="default"
          sx={styles.featured}
        >
          <MediaWithSkeleton
            src={featured.image}
            alt={featured.imageAlt}
            objectFit="cover"
            objectPosition="center"
            sx={styles.featuredMedia}
          />

          <Box
            aria-hidden="true"
            sx={styles.featuredOverlay}
          />

          <Box sx={styles.featuredContent}>
            <Typography
              component="span"
              sx={styles.featuredCategory}
            >
              {featured.category}
            </Typography>

            <Typography
              component="h3"
              variant="h3"
              sx={styles.featuredTitle}
            >
              {featured.title}
            </Typography>

            <Typography
              variant="body1"
              sx={styles.featuredDescription}
            >
              {featured.description}
            </Typography>
          </Box>
        </Card>

        <Box sx={styles.secondary}>
          {secondaryItems.map((item) => (
            <CultureCard
              key={item.id}
              image={item.image}
              imageAlt={item.imageAlt}
              category={item.category}
              title={item.title}
              description={item.description}
              sx={styles.secondaryCard}
            />
          ))}
        </Box>
      </Box>
    </Section>
  );
}