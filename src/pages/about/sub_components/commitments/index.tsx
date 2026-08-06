import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import Badge from "@components/badge";
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
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="left"
      />

      <Box sx={styles.list}>
        {items.map((item, index) => {
          const order = String(index + 1).padStart(2, "0");

          return (
            <Box
              key={item.id}
              sx={styles.item}
            >
              <Box sx={styles.heading}>
                <Badge variant="secondary">
                  {order}
                </Badge>

                <Typography
                  component="h3"
                  variant="h4"
                  sx={styles.title}
                >
                  {item.title}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={styles.description}
              >
                {item.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
}