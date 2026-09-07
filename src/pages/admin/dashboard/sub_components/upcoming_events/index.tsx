import { Box, Typography } from "@mui/material";

import * as styles from "./styles";
import type { UpcomingEvent } from "../../types";

type UpcomingEventsProps = {
  title: string;
  emptyLabel: string;
  events: UpcomingEvent[];
};

export default function UpcomingEvents({ title, emptyLabel, events }: UpcomingEventsProps) {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>{title}</Typography>

      {events.length === 0 ? (
        <Box sx={styles.emptyState}>
          <Typography>{emptyLabel}</Typography>
        </Box>
      ) : (
        events.map((event) => (
          <Box key={event.id} sx={styles.eventRow}>
            <Typography sx={styles.eventTitle}>{event.title}</Typography>
            <Typography sx={styles.eventMeta}>
              {event.startDate}
              {event.location ? ` · ${event.location}` : ""}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
}
