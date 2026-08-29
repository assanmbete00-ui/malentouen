import { Box } from "@mui/material";

import { Typography } from "@mui/material";

import Card from "@components/card";
import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ProjectsPortfolioProps } from "./types";

export default function ProjectsPortfolio({
  id,
  eyebrow,
  title,
  description,
  items,
}: ProjectsPortfolioProps) {
  if (!items.length) return null;

  const renderCard = (
    item: ProjectsPortfolioProps["items"][number],
    featured = false,
  ) => (
    <Card sx={styles.card(featured)}>
      <Box sx={styles.media(featured)}>
        <MediaWithSkeleton
          src={item.image}
          alt={item.imageAlt}
          objectFit="cover"
          sx={styles.image}
        />
      </Box>

      <Box sx={styles.content(featured)}>
        <Typography component="h3" sx={styles.cardTitle(featured)}>
          {item.title}
        </Typography>

        <Typography sx={styles.description}>{item.description}</Typography>
      </Box>
    </Card>
  );

  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={description} />

      <Box sx={styles.grid}>
        <Box sx={styles.featured}>{renderCard(items[0], true)}</Box>

        {items.length > 1 && (
          <Box sx={styles.secondary}>
            {items.slice(1, 3).map((item) => (
              <Box key={item.id}>{renderCard(item)}</Box>
            ))}
          </Box>
        )}

        {items.length > 3 && (
          <Box sx={styles.additional}>
            {items.slice(3).map((item) => (
              <Box key={item.id}>{renderCard(item)}</Box>
            ))}
          </Box>
        )}
      </Box>
    </Section>
  );
}
