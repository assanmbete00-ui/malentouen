import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { NewsArchiveSectionProps } from "./types";

export default function NewsArchive({
  id,
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  categories,
  years,
}: NewsArchiveSectionProps): ReactElement {
  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={description} />

      <Box sx={styles.content}>
        <Box sx={styles.group}>
          <Typography sx={styles.label}>Catégories</Typography>

          <Box sx={styles.options}>
            {categories.map((item) => (
              <Box key={item.id} component="span" sx={styles.option}>
                {item.label}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={styles.group}>
          <Typography sx={styles.label}>Années</Typography>

          <Box sx={styles.options}>
            {years.map((item) => (
              <Box key={item.id} component="span" sx={styles.option}>
                {item.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <TextLink to={actionHref} sx={styles.action}>
        {actionLabel}
      </TextLink>
    </Section>
  );
}