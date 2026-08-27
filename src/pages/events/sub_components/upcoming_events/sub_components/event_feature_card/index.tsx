import { Box, Typography } from "@mui/material";

import Card from "@components/card";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { EventFeatureCardProps } from "./types";

export default function EventFeatureCard({
  image,
  imageAlt,
  date,
  dateTime,
  category,
  title,
  location,
  time,
  featured = false,
  sx,
}: EventFeatureCardProps) {
  return (
    <Card sx={[styles.card(featured), ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>
      <MediaWithSkeleton
        src={image}
        alt={imageAlt}
        objectFit="cover"
        objectPosition="center"
        sx={styles.media(featured)}
      />

      <Box sx={styles.content(featured)}>
        <Box sx={styles.meta}>
          <Typography component="time" dateTime={dateTime} sx={styles.date}>
            {date}
          </Typography>

          <Typography component="span" sx={styles.category}>
            {category}
          </Typography>
        </Box>

        <Typography component="h3" sx={styles.title(featured)}>
          {title}
        </Typography>

        <Box sx={styles.details}>
          <Typography sx={styles.location}>{location}</Typography>
          <Typography sx={styles.time}>{time}</Typography>
        </Box>
      </Box>
    </Card>
  );
}