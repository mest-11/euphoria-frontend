import { useState } from "react";

const ManageEvent = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');

  const addEvent = () => {
    setEvents([...events, { id: events.length + 1, name: newEvent }]);
    setNewEvent('');
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div> <h1>ManageEvent</h1>
      <div>
        {/* <ManageEvent /> */}
      </div>
      <div className="p-[20px] max-w-[600px] m-0 auto">
        <h2 className="text-[22px] text-[#141C24] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">Manage Events </h2>
        < div className="event-form">
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter event name"
            className="event-input"
          />
          <button onClick={addEvent} className="add-event-button" > Add Event </button>
        </div>
        <ul className="event-list">
          {
            events.map(event => (
              <li key={event.id} className="event-item">
                {event.name}
                <button onClick={() => deleteEvent(event.id)} className="delete-event-button" > Delete </button>
              </li>
            ))}
        </ul>
      </div>
    </div>









  )
}

export default ManageEvent