import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { PartnersOverviewProps } from "./types";

export default function PartnersOverview({
  id,
  eyebrow,
  title,
  description,
}: PartnersOverviewProps) {
  return (
    <Section id={id} variant="default" containerSize="default">
      <Box sx={styles.layout}>
        <SectionTitle eyebrow={eyebrow} title={title} align="left" />
        <Typography sx={styles.description}>{description}</Typography>
      </Box>
    </Section>
  );
}
