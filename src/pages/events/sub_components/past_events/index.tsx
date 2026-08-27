import { Box, Typography } from "@mui/material";

import Card from "@components/card";
import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { PastEventsProps } from "./types";

export default function PastEvents({
  id,
  eyebrow,
  title,
  description,
  items,
}: PastEventsProps) {
  if (!items.length) return null;

  return (
    <Section id={id} variant="default" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="left"
      />

      <Box sx={styles.list}>
        {items.map((item) => (
          <Card key={item.id} sx={styles.item}>
            <MediaWithSkeleton
              src={item.image}
              alt={item.imageAlt}
              sx={styles.media}
            />

            <Box sx={styles.content}>
              <Typography
                component="time"
                dateTime={item.dateTime}
                sx={styles.date}
              >
                {item.date}
              </Typography>
              <Typography component="span" sx={styles.category}>
                {item.category}
              </Typography>
              <Typography component="h3" sx={styles.title}>
                {item.title}
              </Typography>
              <Typography component="span" sx={styles.location}>
                {item.location}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Section>
  );
}
