import CalendarGfg from "./createEventCalender"

const CreateEvent = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1 place-content-center">
            <h1 className="text-[22px] text-[#141C24] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5 ">Create a new Event</h1>

            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-[40] flex-1">
                <p className="text-[#141C24] text-base font-medium leading-normal pb-2">
                  Event Name</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border border-[#D4DBE8] h-14" placeholder="type event name" Italic value="" />
              </label>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 p-4">
              <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
                <button>
                  <div className="text-[#141C24] flex size-10 items-center justify-center" data-icon="Caretleft" data-size="18px" data-weight="regular">
                  </div>
                </button>
                {/* <CalendarGfg /> */}
              </div>
            </div>
          </div>

          <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141C24] text-base font-medium leading-normal pb-2">
                Price*</p>
              <input type="" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border border-[#D4DBE8] h-14" placeholder="price" value="" />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#141C24] text-base font-medium leading-normal pb-2">
                Location*</p>
              <input type="text" name="search" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141C24] focus:outline-0 focus:ring-0 border border-[#D4DBE8] h-14" placeholder="type location" value="" />
            </label>
          </div>
          <p className="text-[#3F5374] text-sm font-normal leading-normal pb-3 pt-1 px-4">
            Upload an image or flier for your event</p>
          <input type="file" className="" placeholder="" value=""/>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#F4C753] hover:bg-[#F4C753] active:bg-[#F4C753] focus:bg-[#F4C753] focus:outline-none focus:ring focus:ring-bg-[#F4C753] text-[#141C24] text-sm font-bold leading-normal tracking-[0.015em]"><span className="truncate">Submit</span></button>

        </div>
      </div>
    </div>

  );
}

export default CreateEvent