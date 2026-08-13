import { useMemo, useState, type ReactElement } from "react";
import { Box } from "@mui/material";

import GalleryCard from "@components/gallery_card";
import MediaLightbox from "@components/media_lightbox";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { CulturalGallerySectionProps } from "./types";

export default function CulturalGallery({
  id,
  eyebrow,
  title,
  description,
  lightboxLabels,
  items,
}: CulturalGallerySectionProps): ReactElement | null {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const lightboxItems = useMemo(
    () =>
      items.map((item) => ({
        id: item.id,
        src: item.image,
        alt: item.imageAlt,
        title: item.title,
      })),
    [items],
  );

  if (!items.length) return null;

  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="center"
      />

      <Box sx={styles.grid}>
        {items.map((item, index) => (
          <Box key={item.id} sx={styles.item}>
            <GalleryCard
              image={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              onPreview={() => setActiveIndex(index)}
              sx={index === items.length - 1 ? styles.cardPanoramic : styles.card}
            />
          </Box>
        ))}
      </Box>

      <MediaLightbox
        open={activeIndex !== null}
        items={lightboxItems}
        activeIndex={activeIndex ?? 0}
        labels={lightboxLabels}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </Section>
  );
}