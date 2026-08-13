import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { IntangibleHeritageSectionProps } from "./types";

export default function IntangibleHeritage({
  id,
  eyebrow,
  title,
  description,
  descriptionSecondary,
  items,
}: IntangibleHeritageSectionProps): ReactElement | null {
  if (!items.length) return null;

  return (
    <Section id={id} variant="default" containerSize="wide">
      <Box sx={styles.introduction}>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          align="left"
        />

        {descriptionSecondary && (
          <Typography variant="body1" sx={styles.descriptionSecondary}>
            {descriptionSecondary}
          </Typography>
        )}
      </Box>

      <Box sx={styles.grid}>
        {items.map((item, index) => (
          <Box key={item.id} sx={styles.item}>
            <Typography component="span" sx={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </Typography>

            <Box sx={styles.content}>
              <Typography component="h3" variant="h5" sx={styles.title}>
                {item.title}
              </Typography>

              <Typography variant="body1" sx={styles.description}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}