import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ContactOverviewProps } from "./types";

export default function ContactOverview({
  id,
  eyebrow,
  title,
  description,
  note,
}: ContactOverviewProps) {
  return (
    <Section id={id} spacing="spacious">
      <Box sx={styles.layout}>
        <Box sx={styles.content}>
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
          />

          <Typography sx={styles.description}>
            {description}
          </Typography>
        </Box>

        <Typography component="p" sx={styles.note}>
          {note}
        </Typography>
      </Box>
    </Section>
  );
}