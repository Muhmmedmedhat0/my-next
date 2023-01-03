import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilterdEventPage() {
  const router = useRouter();
  const filterdData = router.query.slug;
  if (!filterdData) {
    return <p className="center">Loading...</p>;
  }
  const filterdYear = filterdData[0];
  const filterdMonth = filterdData[1];
  const numYear = +filterdYear;
  const numMonth = +filterdMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2023 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <h2 className="center">Inalid Filter Plaese Adjust Your Values!</h2>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </>
    );
  }
  const filterEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filterEvents || !filterEvents.length === 0) {
    return;
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      {!filterEvents || filterEvents.length === 0 ? (
        <>
          <ErrorAlert>
            <h2 className="center">No Events Found!</h2>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      ) : (
        <>
          <ResultsTitle date={date} />
          <EventList items={filterEvents} />
        </>
      )}
    </>
  );
}

export default FilterdEventPage;
