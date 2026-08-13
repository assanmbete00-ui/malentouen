import type { ReactElement } from "react";
import { Box } from "@mui/material";

import NewsCard from "@components/news_card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { LatestNewsSectionProps } from "./types";

export default function LatestNews({
  id,
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  items,
}: LatestNewsSectionProps): ReactElement | null {
  if (!items.length) return null;

  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        action={
          <TextLink to={actionHref} sx={styles.headerAction}>
            {actionLabel}
          </TextLink>
        }
      />

      <Box sx={styles.grid}>
        {items.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            imageAlt={item.imageAlt}
            category={item.category.label}
            date={item.formattedDate}
            title={item.title}
            description={item.excerpt}
            href={item.href}
            sx={styles.card}
          />
        ))}
      </Box>
    </Section>
  );
}