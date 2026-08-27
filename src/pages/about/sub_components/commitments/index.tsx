import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import Badge from "@components/badge";
import Card from "@components/card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { CommitmentsSectionProps } from "./types";

export default function Commitments({
  id,
  eyebrow,
  title,
  description,
  items,
}: CommitmentsSectionProps): ReactElement | null {
  if (!items.length) {
    return null;
  }

  return (
    <Section
      id={id}
      variant="default"
      containerSize="wide"
    >
      <Box sx={styles.wrapper}>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          align="center"
          sx={styles.sectionTitle}
          
        />

        <Box sx={styles.grid}>
          {items.map((item, index) => (
            <Card
              key={item.id}
              variant="default"
              sx={styles.card}
            >
              <Badge variant="secondary">
                {String(index + 1).padStart(2, "0")}
              </Badge>

              <Typography
                component="h3"
                variant="h5"
                sx={styles.title}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={styles.description}
              >
                {item.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Section>
  );
}