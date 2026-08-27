import { Box } from "@mui/material";

import EventCard from "@components/event_card";

import styles from "./styles";
import type { EventsListProps } from "./types";

export default function EventsList({ items }: EventsListProps) {
  if (!items.length) return null;

  return (
    <Box sx={styles.list}>
      {items.map((item) => (
        <EventCard
          key={item.id}
          date={item.date}
          dateTime={item.dateTime}
          category={item.category}
          title={item.title}
          location={item.location}
          time={item.time}
          href={item.href}
        />
      ))}
    </Box>
  );
}
