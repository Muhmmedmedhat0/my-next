import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();

  const events = getAllEvents();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
		router.push(fullPath)
  }
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default EventsPage;
