import { Box } from "@mui/material";

import EventCard from "@components/event_card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

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

  return (
    <Section id={id} variant="default" containerSize="wide">
      <SectionTitle
        align="left"
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
      />

      <Box sx={styles.grid}>
        {items.map((item) => (
          <EventCard
            key={item.id}
            date={item.date}
            dateTime={item.dateTime}
            category={item.category}
            title={item.title}
            location={item.location}
            time={item.time}
          />
        ))}
      </Box>
    </Section>
  );
}