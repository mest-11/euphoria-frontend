import AllEventsCard from "../../components/allEventsCard"
import NavBar from "../../components/navBar"

const Events = () => {
  return (
    <div>
      <NavBar />
      <div className=" flex flex-col gap-y-14 py-28 px-6 bg-slate-50">
        <span className="flex flex-col justify-center items-center text-[25px] font-medium ">
          All Events
        </span>
        <div className=" flex flex-wrap justify-center items-center gap-x-10 gap-y-10">
          <AllEventsCard
            eventName={'House Party'}
            discription={'slumber party at best rht uyiy bgng tuu '}
            price={'$100'}
            location={'Mile 7'}
            date={'11/04/2024'} />

          <AllEventsCard
            eventName={'House Party'}
            discription={'slumber party at best rht uyiy bgng tuu '}
            price={'$100'}
            location={'Mile 7'}
            date={'11/04/2024'} />

          <AllEventsCard
            eventName={'House Party'}
            discription={'slumber party at best rht uyiy bgng tuu '}
            price={'$100'}
            location={'Mile 7'}
            date={'11/04/2024'} />

          <AllEventsCard
            eventName={'House Party'}
            discription={'slumber party at best rht uyiy bgng tuu '}
            price={'$100'}
            location={'Mile 7'}
            date={'11/04/2024'} />

          <AllEventsCard
            eventName={'House Party'}
            discription={'slumber party at best rht uyiy bgng tuu '}
            price={'$100'}
            location={'Mile 7'}
            date={'11/04/2024'} />

          <AllEventsCard
            eventName={'House Party'}
            discription={'slumber party at best rht uyiy bgng tuu '}
            price={'$100'}
            location={'Mile 7'}
            date={'11/04/2024'} />
        </div>

      </div>

    </div>
  )
}

export default Events