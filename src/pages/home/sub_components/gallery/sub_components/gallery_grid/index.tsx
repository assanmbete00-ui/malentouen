import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles";
import type { GalleryGridProps } from "./types";

export default function GalleryGrid({ items }: GalleryGridProps) {
  if (!items.length) return null;

  return (
    <Box sx={styles.grid}>
      {items.map((item) => (
        <Box
          key={item.id}
          component={RouterLink}
          to={item.href || "/gallery"}
          className="gallery-item"
          sx={styles.item}
        >
          <Box
            component="img"
            src={item.image}
            alt={typeof item.title === "string" ? item.title : "Galerie de Malentouen"}
            sx={styles.image}
          />

          <Box sx={styles.overlay}>
            <Typography sx={styles.title}>
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}