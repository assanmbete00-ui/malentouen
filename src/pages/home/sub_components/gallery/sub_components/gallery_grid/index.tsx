import { Box } from "@mui/material";

import GalleryCard from "@components/gallery_card";

import styles from "./styles";
import type { GalleryGridProps } from "./types";

export default function GalleryGrid({
  items,
}: GalleryGridProps) {
  if (!items.length) {
    return null;
  }

  return (
    <Box sx={styles.grid}>
      {items.map((item) => (
        <GalleryCard
          key={item.id}
          image={item.image}
          imageAlt={item.imageAlt}
          title={item.title}
          href={item.href}
        />
      ))}
    </Box>
  );
}