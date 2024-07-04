import DashBoardNavBar from "../../components/dashBoardNavBar"
import EventCard from "../../components/eventCard"
import { Flier } from "../../assets"

const DashBoard = () => {
  return (

    <div className=" ">
      <DashBoardNavBar />
      <div className="py-28 px-6 bg-slate-50">
        <span className="flex flex-col justify-center items-center text-[25px] font-medium pb-10">
          Your Events
        </span>

        <div className="  place-content-center flex flex-col gap-y-10 gap-x-10 bg-transparent py-10 ">
          <EventCard
            flier={Flier}
            eventName={"House Party"}
            discription={"@monica's blah blah blahmmmmmmmmmmmmmmmmmmmmmm "}
            date={"11-11-2024"}
            location={"Kasoa"}
            price={`$100`}
          />
          <EventCard
            flier={Flier}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"Kasoa"}
          />
          <EventCard
            flier={Flier}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"Kasoa"}
          />
          <EventCard
            flier={Flier}
            eventName={"House Party"}
            discription={"@monica's blah blah@monica's blah"}
            date={"11-11-2024"}
            location={"Kasoa"}
          />
          {/* <EventCard
            flier={Flier}
            eventName={"House Party"}
            discription={"@monica's blah bla"}
          />
          <EventCard
            flier={Flier}
            eventName={"House Party"}
            discription={"@monica's blah blah"}
          /> */}
        </div>

      </div>






    </div>


  )
}

export default DashBoard