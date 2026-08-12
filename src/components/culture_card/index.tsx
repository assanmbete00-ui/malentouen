import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Card from "@components/card";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { CultureCardProps } from "./types";

export default function CultureCard({
  image,
  imageAlt,
  category,
  title,
  description,
  href,
  sx,
}: CultureCardProps) {
  const baseSx = {
    height: "100%",
    overflow: "hidden",
  };

  const contentSx = sx
    ? ([baseSx, ...(Array.isArray(sx) ? sx : [sx])] as SxProps<Theme>)
    : baseSx;

  const content = (
    <Card variant={href ? "interactive" : "default"} sx={contentSx}>
      <Box sx={styles.imageWrapper}>
        <MediaWithSkeleton
          src={image}
          alt={imageAlt}
          sx={styles.image}
        />
      </Box>

      <Box sx={styles.content}>
        <Typography component="span" sx={styles.category}>
          {category}
        </Typography>

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
