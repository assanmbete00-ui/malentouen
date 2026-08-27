import { Box } from "@mui/material";

import Section from "@components/section";

import useEvents from "./hooks/use_events";

import EventsContent from "./sub_components/events_content";
import EventsList from "./sub_components/events_list";

import styles from "./styles";

export default function Events() {
  const events = useEvents();

  return (
    <Section id="events" variant="default" containerSize="wide">
      <Box sx={styles.container}>
        <EventsContent
          {...events.content}
          action={events.options.showAction ? events.action : undefined}
        />

        {events.options.showItems && (
          <EventsList items={events.items} />
        )}
      </Box>
    </Section>
  );
}