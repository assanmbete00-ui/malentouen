import { Box } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import EventFeatureCard from "./sub_components/event_feature_card";
import styles from "./styles";
import type { UpcomingEventsSectionProps } from "./types";

export default function UpcomingEvents({
  id,
  eyebrow,
  title,
  description,
  items,
}: UpcomingEventsSectionProps) {
  if (!items.length) return null;

  const visibleItems = items.slice(0, 3);

  return (
    <Section id={id} variant="default" containerSize="wide">
      <SectionTitle
        align="left"
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
      />

      <Box sx={styles.grid(visibleItems.length)}>
        {visibleItems.map((item, index) => (
          <EventFeatureCard
            key={item.id}
            image={item.image}
            imageAlt={item.imageAlt}
            date={item.date}
            dateTime={item.dateTime}
            category={item.category}
            title={item.title}
            location={item.location}
            time={item.time}
            featured={index === 0}
            sx={styles.item(index, visibleItems.length)}
          />
        ))}
      </Box>
    </Section>
  );
}
