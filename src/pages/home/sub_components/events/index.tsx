import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Button from "@components/button";
import Section from "@components/section";

import useEvents from "./hooks/use_events";

import EventsContent from "./sub_components/events_content";
import EventsList from "./sub_components/events_list";

import styles from "./styles";

export default function Events() {
  const events = useEvents();

  return (
    <Section
      id="events"
      variant="paper"
      containerSize="wide"
    >
      <Box sx={styles.container}>
        <EventsContent
          {...events.content}
        />

        {events.options.showItems && (
          <EventsList
            items={events.items}
          />
        )}

        {events.options.showAction && (
          <Box sx={styles.action}>
            <RouterLink
              to={events.action.href}
              style={{ textDecoration: "none" }}
            >
              <Button>
                {events.action.label}
              </Button>
            </RouterLink>
          </Box>
        )}
      </Box>
    </Section>
  );
}