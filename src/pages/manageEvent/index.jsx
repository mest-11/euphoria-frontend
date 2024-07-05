import { useState } from "react";

const ManageEvent = () => {
  const [events, setEvents] = useState([]);
  // const [newEvent, setNewEvent] = useState('');

  const addEvent = () => {
    setEvents([...events, { id: events.length + 1, name: newEvent }]);
    setNewEvent('');
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">
      <div className="layout-content-container flex flex-col w-[52px] py-5 max-w-[600px] flex-1 place-content-center  border border-box border-50 border-yellow-500 bg-inherit bg-[#f5e1ce]">
        <div className="flex flex-1 justify-center py-5px-40"> 
          
          <div className="p-[20px] max-w-[600px] m-0 auto">
            <h2 className="text-[22px] text-[#141C24] font-bold font-italic leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">Manage Events </h2>
            < div className="place-items-center items-center">
              <input
                type="text"
                placeholder="Enter event name"
                className=" font-sans font-size[15px]"
              />
              <button onClick={addEvent} className="" > Add Event </button>
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
          
        

      </div>
    </div>









  )
}

export default ManageEvent