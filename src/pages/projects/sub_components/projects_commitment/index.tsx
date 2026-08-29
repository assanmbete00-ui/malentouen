import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ProjectsCommitmentProps } from "./types";

export default function ProjectsCommitment({
  id,
  eyebrow,
  title,
  description,
  principles,
}: ProjectsCommitmentProps) {
  return (
    <Section id={id} variant="secondary" containerSize="wide">
      <Box sx={styles.layout}>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          sx={styles.title}
        />

        <Box component="ul" sx={styles.principles}>
          {principles.map((principle) => (
            <Box component="li" key={principle.id} sx={styles.principle}>
              <Typography component="h3" sx={styles.principleTitle}>
                {principle.title}
              </Typography>
              <Typography sx={styles.principleDescription}>
                {principle.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
