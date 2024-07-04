import React, { useState } from 'react';
import './ManageEvent.css';

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

}
export default ManageEvent;