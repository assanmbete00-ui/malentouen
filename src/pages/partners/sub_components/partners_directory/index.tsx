import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { PartnersDirectoryProps } from "./types";

export default function PartnersDirectory({
  id,
  eyebrow,
  title,
  items,
}: PartnersDirectoryProps) {
  if (!items.length) {
    return null;
  }

  return (
    <Section id={id} variant="paper" containerSize="default">
      <SectionTitle eyebrow={eyebrow} title={title} align="center" />

      <Box sx={styles.grid}>
        {items.map((partner) => (
          <Box key={partner.id} sx={styles.item}>
            <MediaWithSkeleton
              src={partner.image}
              alt={partner.name}
              objectFit="contain"
              sx={styles.logo}
            />

            <Typography component="h3" sx={styles.name}>
              {partner.name}
            </Typography>

            <Typography sx={styles.type}>{partner.type}</Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
