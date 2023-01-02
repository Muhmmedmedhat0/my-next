import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage() {
  const router = useRouter();
  const { event_id } = router.query;
  const event = getEventById(event_id);

  return (
    <>
    {event ? <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent><p>{event.description}</p></EventContent>
    </> : <h1 style={{textAlign:"center"}}>No Event Found!</h1>}
      
    </>
  );
}

export default EventDetailPage;
