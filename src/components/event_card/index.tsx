import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Card from "@components/card";

import styles from "./styles";
import type { EventCardProps } from "./types";

export default function EventCard({
  date,
  dateTime,
  category,
  title,
  location,
  time,
  href,
  sx,
}: EventCardProps) {
  const content = (
    <Card variant={href ? "interactive" : "default"} sx={sx}>
      <Box sx={styles.content}>
        <Box sx={styles.titleRow}>
          <Box sx={styles.marker} aria-hidden="true" />

          <Typography component="h3" sx={styles.title}>
            {title}
          </Typography>
        </Box>

        <Typography component="time" dateTime={dateTime} sx={styles.date}>
          {date}
        </Typography>

        <Typography sx={styles.meta}>
          {location} • {time}
        </Typography>

        {category && (
          <Typography component="span" sx={styles.category}>
            {category}
          </Typography>
        )}
      </Box>
    </Card>
  );

  if (!href) return content;

  return (
    <Box component={RouterLink} to={href} sx={styles.link}>
      {content}
    </Box>
  );
}
