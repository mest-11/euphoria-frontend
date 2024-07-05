import DashBoardNavBar from "../../components/dashBoardNavBar"
import EventCard from "../../components/eventCard"
import { Flier } from "../../assets"
import { Youth } from "../../assets"
import { Books } from "../../assets" 
import { Geek } from "../../assets"
import { Festival } from "../../assets"
import { Kingdom } from "../../assets"
import { SummitImg } from "../../assets"
import { ProjectImg } from "../../assets"
import { Laugh } from "../../assets"
import { BeastImg } from "../../assets"
import { Entertainment } from "../../assets"
import { useEffect, useState } from "react"
import axios from "axios"

const DashBoard = () => {
  // Define a state to store events
  const [events, setEvents] = useState([]);

  //Define a function to fetch events
  const getEvents = async () => {
    const response =await axios.get('https://euphoria-backend-1.onrender.com/events');
    if (response.status == 200) {
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

    <div className=" ">
      <DashBoardNavBar />
      <div className="py-28 px-6 bg-slate-50">
        <span className="flex flex-col justify-center items-center text-[25px] font-medium pb-10">
          Your Events
        </span>

        <div className="  place-content-center flex flex-col gap-y-10 gap-x-10 bg-transparent py-10 ">
          
          {events.map(event => (
            <EventCard
            flier={`https://savefiles.org/${event.flier}?shareable_link=288`}
            eventName={event.eventName}
            discription={event.description}
            date={event.date}
            location={event.location}
            price={event.price}
          />

          ))}
          
          
          
          
          {/* <EventCard
            flier={Youth}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"Kasoa"}
            price={`$50`}
          />
          <EventCard
            flier={Books}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"Kasoa"}
            price={`$45`}
          />
          <EventCard
            flier={Geek}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"100"}
            price={`$100`}
          />
          <EventCard
            flier={Festival}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={""}
            price={`$25`}
          />
          <EventCard
            flier={Kingdom}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"Kasoa"}
            price={`$60`}
          />
          <EventCard
            flier={SummitImg}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"Kasoa"}
            price={`$30`}
          />
          <EventCard
            flier={Laugh}
            eventName={"Night of Laughs"}
            discription={"Night of comedy and laughs"}
            date={"10-10-2024"}
            location={"Conference Center"}
            price={`$105`}
          />
          <EventCard
            flier={Entertainment}
            eventName={"Ghana Party In the Park"}
            discription={"Rock show, drinks and lots of food will be available."}
            date={"13-07-2024"}
            location={"Oak Hill Park"}
            price={`$125`}
          />
          <EventCard
            flier={BeastImg}
            eventName={"Beast Concert"}
            discription={"Beast concert is a musical concert organized by BEAST INC. Refer to flier for names of the featured artists. "}
            date={"14-07-2024"}
            location={"Zain Park"}
            price={`$115`}
          /> */}
          
        </div>

      </div>






    </div>


  )
}

export default DashBoard