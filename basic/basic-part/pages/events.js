import { useRouter } from "next/router";
import { useState } from "react";

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    // router.push("/events?category=sports", undefined, { shallow: true });
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <h2>List of events</h2>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      {events.map((event) => (
        <div key={event.id}>
          <h3>
            {event.title} | {event.category}
          </h3>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
// export async function getServerSideProps(context) {
//   const { query } = context;
//   const { category } = query;
//   const queryString = category ? "category=sports" : "";
//   const response = await fetch(`http://localhost:4000/events?${queryString}`);
//   const data = await response.json();

//   return {
//     props: {
//       eventList: data,
//     },
//   };
// }
export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
