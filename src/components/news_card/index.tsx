import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Card from "@components/card";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { NewsCardProps } from "./types";

export default function NewsCard({
  image,
  category,
  date,
  title,
  description,
  href,
  sx,
}: NewsCardProps) {
  const content = (
    <Card variant={href ? "interactive" : "default"} sx={sx}>
      <Box sx={styles.imageWrapper}>
        <MediaWithSkeleton
          src={image}
          alt={typeof title === "string" ? title : "Actualité de Malentouen"}
          sx={styles.image}
        />
      </Box>

      <Box sx={styles.content}>
        <Box sx={styles.meta}>
          <Typography component="span" sx={styles.category}>
            {category}
          </Typography>

          <Typography component="span" sx={styles.date}>
            {date}
          </Typography>
        </Box>

        <Typography component="h3" sx={styles.title}>
          {title}
        </Typography>

        <Typography sx={styles.description}>{description}</Typography>
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
