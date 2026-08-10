import type { ReactElement } from "react";
import { Box } from "@mui/material";

import CultureCard from "@components/culture_card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { CulturalExpressionsSectionProps } from "./types";

export default function CulturalExpressions({
  id,
  eyebrow,
  title,
  description,
  items,
}: CulturalExpressionsSectionProps):
  ReactElement | null {
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
        align="center"
      />

      <Box sx={styles.grid}>
        {items.map((item) => (
          <CultureCard
            key={item.id}
            image={item.image}
            imageAlt={item.imageAlt}
            category={item.category}
            title={item.title}
            description={item.description}
            sx={styles.card}
          />
        ))}
      </Box>
    </Section>
  );
}