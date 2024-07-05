import axios from "axios";
import CalendarGfg from "./createEventCalender"

const CreateEvent = () => {
  // Post event to Backend
  const postEvent = async (event) => {
    event.preventDefault();
    // Collect all inputs from form
    const formData = new FormData(event.target);
    // Post data to backend
    const response = await axios.post("https://euphoria-backend-1.onrender.com/events", formData);
    console.log(response)

  }
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5px-40 ">

          <div className="layout-content-container flex flex-col w-[52px] py-5 max-w-[600px] flex-1 place-content-center  border border-box border-50 border-yellow-500 bg-inherit bg-[#f5e1ce]">
            <h1 className="text-[22px] text-[#284f75] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5 ">Create a new Event</h1>

            <form onSubmit={postEvent}>

              <div className="flex max-w-[480px] flex-1 flex-wrap items-center place-content-center gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1 text-[#141C24] text-base font-medium leading-normal pb-2">
                  Event Name</label>
                <input type="text" className=" form-input flex w-60 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border-[2px] border-yellow-500 h-10" placeholder="Enter event name" id="name" name="eventName"/>

              </div>

              <div className="flex max-w-[480px] flex-1 flex-wrap items-center place-content-center gap-4 px-4 py-3">
                <div className="">

                  <label className="flex flex-col min-w-40 flex-1 text-[#141C24] text-base font-medium leading-normal pb-2">
                    Date
                  </label>

                  <input type="datetime-local" className="form-input flex w-60 min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border-[2px] border-yellow-500 h-8" placeholder="" id="date" name="date"/>

                </div>

                <div className="flex max-w-[200px] flex-1 flex-wrap items-center place-content-center px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1 text-[#141C24] text-base font-medium leading-normal pb-2">
                    Price*
                  </label>

                    <select className="form-input flex w-60 min-w-[40px] flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border-[2px] border-yellow-500 h-8" placeholder="" id="price" name="price" >
                      <option></option>
                      <option>$10</option>
                      <option>$20</option>
                      <option>$30</option>
                      <option>$50</option>
                      <option>$60</option>
                      <option>$70</option>
                      <option>$80</option>
                      <option>$90</option>
                      <option>$100</option>

                    </select>
                </div>

                <div className="flex max-w-[480px] flex-1 flex-wrap items-center place-content-center gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-[40] text-[#141C24] text-base font-medium leading-normal pb-2 items-center place-content-center flex-1">
                      Event Description</label>
                    <input type="text" class="form-input flex w-30 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border-[2px] border-yellow-500 h-10" placeholder="My Event" id="description" name="description" />
                  
                </div>

                <div className="flex max-w-[480px] flex-1 flex-wrap items-center place-content-center gap-4 px-4 py-3">
                  <div className="flex items-center place-content-center">
                    
                      <label className="flex flex-col min-w-40 flex-1 text-[#141C24] text-base font-medium leading-normal pb-2" placeholder="">Location*</label>

                      <select className="form-input flex w-60 min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border-[2px] border-yellow-500 h-8" placeholder="" id="location" name="location" >
                        <option></option>
                        <option>Independence Square</option>
                        <option>Labadi Beach</option>
                        <option>Polo Beach</option>
                        <option>National Theatre</option>
                        <option>Nubuke Art Gallery</option>
                        <option>Aqua Safari</option>
                        <option>Tamale Sports Stadium</option>
                        <option>Accra Museum</option>
                        <option>Kempinski Hotel</option>
                        <option>Mest</option>
                        <option>Cantonment</option>
                        <option>Osu</option>
                        <option>Kasoa</option>
                        <option>Krokrobite Beach</option>
                        <option>Accra Sports Stadium</option>
                        <option>Accra Sports Stadium</option>

                      </select>
                  </div>
                </div>
                <div className="flex items-center"><label className="text-[#3F5374] text-sm font-normal leading-normal pb-3 pt-1 px-4">
                  Upload an image or flier for your event</label>
                  <input type="file" name="flier" id="flier" placeholder="" /></div>


                <div className="flex px-4 pt-20 justify-center items-end">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#F4C753] hover:bg-[#f0ece3] active:bg-[#F4C753] focus:bg-[#F4C753] focus:outline-none focus:ring focus:ring-bg-[#F4C753] text-[#141C24] text-sm font-bold leading-normal tracking-[0.015em]"><span className="truncate">Submit</span></button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
}

export default CreateEvent