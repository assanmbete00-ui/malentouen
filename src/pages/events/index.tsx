import PageBanner from "@components/page_banner";

import useEvents from "./hooks/use_events";
import UpcomingEvents from "./sub_components/upcoming_events";
import EventsAgenda from "./sub_components/events_agenda";

export default function Events() {
  const { banner, upcoming, agenda } = useEvents();

  return (
    <>
      <PageBanner {...banner} />
      <UpcomingEvents {...upcoming} />
      <EventsAgenda {...agenda} />
    </>
  );
}
