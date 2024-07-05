import AllEventsCard from "../../components/allEventsCard"
import NavBar from "../../components/navBar"
import { Festival } from "../../assets"
import { Geek } from "../../assets"
import { Entertainment } from "../../assets"
import { Books } from "../../assets"
import { BeastImg } from "../../assets"
import { Queens } from "../../assets"
import { ProjectImg } from "../../assets"
import { Kingdom } from "../../assets"
import { SummitImg } from "../../assets"
import { useEffect, useState } from "react"
import axios from "axios"
import EventCard from "../../components/eventCard"
const Events = () => {

  const [events, setEvents] = useState([]);

  //Define a function to fetch events
  const getEvents = async () => {
    const response =await axios.get('https://euphoria-backend-1.onrender.com/events');
    if (response.status == 200) {
      console.log(response)
      setEvents(response.data);
    } else {
      setEvents([]);
    }
  }
  // Get events
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div>
      <NavBar />
      <div className=" flex flex-col gap-y-14 py-28 px-6 bg-slate-50">
        <span className="flex flex-col justify-center items-center text-[25px] font-medium ">
          All Events
        </span>
        
        <div className=" grid grid-cols-4 gap-4">
        {events.map(event => (
          <div className=" grid grid-cols-4 ">

            
            <AllEventsCard
            flier={`https://savefiles.org/${event.flier}?shareable_link=288`}
            eventName={event.eventName}
            discription={event.description}
            date={event.date}
            location={event.location}
            price={event.price}
          />
 </div>
          ))}
          
        </div>
       
        </div>

     

    </div>
  )
}

export default Events