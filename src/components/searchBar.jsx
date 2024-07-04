import { Search } from "lucide-react"


const SearchBar = (eventName, eventDate,) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex gap-x-4 justify-center items-center ">
                <div className="flex justify-center items-center border border-gray-300 rounded-full bg-white shadow-md overflow-hidden w-[100%]">
                    <div className="flex flex-col p-4 border-r border-gray-300">
                        <label className="text-xs font-bold">Event Name</label>
                        <input
                            type="text"
                            className="outline-none text-gray-600"
                            placeholder="Search event name"


                        />
                    </div>

                    <div className="flex flex-col p-4 border-r border-gray-300">
                        <label className="text-xs font-bold">Date</label>
                        <input
                            type="text"
                            className="outline-none text-gray-600"
                            placeholder="Select date to search"

                        />

                    </div>
                    <div className="flex flex-col border-gray-300 p-4">
                        <label className="text-xs font-bold">Location</label>
                        <input
                            type="text"
                            className="outline-none text-gray-600"
                            placeholder="Event Location"

                        />
                    </div>


                </div>
                <a href=""><Search className="size-14 text-amber-500 hover:animate-pulse" /></a>

            </div>
        </div>
    )
}

export default SearchBar