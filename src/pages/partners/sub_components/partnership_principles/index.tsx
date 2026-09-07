import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { PartnershipPrinciplesProps } from "./types";

export default function PartnershipPrinciples({
  id,
  eyebrow,
  title,
  items,
}: PartnershipPrinciplesProps) {
  return (
    <Section id={id} variant="default" containerSize="default">
      <SectionTitle eyebrow={eyebrow} title={title} align="center" />

      <Box sx={styles.grid}>
        {items.map((principle, index) => (
          <Box key={principle.id} sx={styles.item}>
            <Typography sx={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </Typography>

            <Typography component="h3" sx={styles.title}>
              {principle.title}
            </Typography>

            <Typography sx={styles.description}>
              {principle.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
