import type { ReactElement } from "react";
import { Box } from "@mui/material";

import GalleryCard from "@components/gallery_card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { CulturalGallerySectionProps } from "./types";

export default function CulturalGallery({
  id,
  eyebrow,
  title,
  description,
  items,
}: CulturalGallerySectionProps):
  ReactElement | null {
  if (!items.length) {
    return null;
  }

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
        align="center"
      />

      <Box sx={styles.grid}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={styles.item}
          >
            <GalleryCard
              image={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              href={item.href}
              sx={styles.card}
            />
          </Box>
        ))}
      </Box>
    </Section>
  );
}