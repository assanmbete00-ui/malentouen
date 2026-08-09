import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Card from "@components/card";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { ProjectsCardProps } from "./types";

export default function ProjectsCard({
  image,
  title,
  description,
  href,
  sx,
}: ProjectsCardProps) {
  const content = (
    <Card
      variant={href ? "interactive" : "default"}
      sx={[styles.card, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    >
      <Box sx={styles.media}>
        <MediaWithSkeleton
          src={image}
          alt={
            typeof title === "string"
              ? title
              : "Projet de la Chefferie de Malentouen"
          }
          sx={styles.image}
        />
      </Box>

      <Box sx={styles.content}>
        <Typography component="h3" sx={styles.title}>
          {title}
        </Typography>

        <Typography sx={styles.description}>{description}</Typography>
      </Box>
    </Card>
  );

  if (!href) {
    return content;
  }

  return (
    <Box component={RouterLink} to={href} sx={styles.link}>
      {content}
    </Box>
  );
}
