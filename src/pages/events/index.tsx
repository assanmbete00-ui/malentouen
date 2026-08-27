import PageBanner from "@components/page_banner";

import useEvents from "./hooks/use_events";
import UpcomingEvents from "./sub_components/upcoming_events";
import EventsAgenda from "./sub_components/events_agenda";
import PastEvents from "./sub_components/past_events";

export default function Events() {
  const { banner, upcoming, agenda, past } = useEvents();

  return (
    <>
      <PageBanner {...banner} />
      <UpcomingEvents {...upcoming} />
      <EventsAgenda {...agenda} />
      <PastEvents {...past} />
    </>
  );
}
