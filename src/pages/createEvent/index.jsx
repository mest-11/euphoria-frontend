import CalendarGfg from "./createEventCalender"

const CreateEvent = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col items-center  bg-[#F8F9FB] overflow-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1 place-content-center">
            <h1 className="text-[22px] text-[#141C24] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5 ">Create a new Event</h1>

            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-[40] flex-1">
                <p className="text-[#141C24] text-base font-medium leading-normal pb-2">
                  Event Name</p>
                <input type="text" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border-[5px] border-[#D4DBE8] h-14" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder="Search for event name"/>
              </label>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-1 p-4">
              <label className="flex  min-w-[10] flex-1 text-[#141C24] size-10 ">
                date
              </label>

              <input type="datetime-local" className="" placeholder=""/>
            </div>

            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">

              <label className="flex flex-col min-w-40 flex-1 text-[#141C24] text-base font-medium leading-normal pb-2">
                Price*
              </label>

              <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border border-[#D4DBE8] h-5" placeholder="">
                <option value=""></option>
                <option value="">$10</option>
                <option value="">$20</option>
                <option value="">$30</option>
                <option value="">$50</option>
                <option value="">$60</option>
                <option value="">$70</option>
                <option value="">$80</option>
                <option value="">$90</option>
                <option value="">$100</option>


              </select>

            </div>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <form >
                  <label for="Location">Location*</label>
                  <select id="location" name="Accra">
   <option value=""></option>
    <option value="Aswoshi">Awoshi</option>
    <option value="Osu">Osu</option>
    <option value="Labone">Labone</option>
    <option value="Kaneshie">Kaneshie</option>
    <option value="Cantoments">Cantoments</option>
    <option value="Labadi">Labadi</option>
  </select>
  
</form>
            
            </div>
            <p className="text-[#3F5374] text-sm font-normal leading-normal pb-3 pt-1 px-4">
              Upload an image or flier for your event</p>
            <input type="file" className="" placeholder="" value="" />
          </div>

          <div className="flex px-4 pt-20 justify-center items-end">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#F4C753] hover:bg-[#F4C753] active:bg-[#F4C753] focus:bg-[#F4C753] focus:outline-none focus:ring focus:ring-bg-[#F4C753] text-[#141C24] text-sm font-bold leading-normal tracking-[0.015em]"><span className="truncate">Submit</span></button>

          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateEvent