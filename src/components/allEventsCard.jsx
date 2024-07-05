import { CalendarDays, MapPin, MapPinIcon, ReceiptCent } from "lucide-react"
import { Flier } from "../assets"




const AllEventsCard = ({ flier, eventName, discription, date, location, price }) => {



    return (
        <div>
            <div className="flex flex-col justify-center items-center w-[280px] h-[330px]">

                <div className="flex flex-col justify-center items-center gap-y-2  gap-x-4">
                    <img src={flier} alt="event flier" className="size-[190px] rounded-[5px] hover:size-[250px] ease-in-out duration-300" />


                    <div className="flex flex-col text-black  subpixel-antialiased font-thin pb-3 p-2 gap-y-2">
                        <div className="flex flex-col gap-x-2">
                            <span className="text-[20px] flex  justify-center items-center ">{eventName}</span>
                            <span className="text-[15px] ">{discription}</span>

                        </div>


                        <div className="flex justify-center gap-x-2 ">

                            <div className="flex "><ReceiptCent className="size-6" />
                                <span>{price}</span>
                            </div>
                            <div className="flex "> <CalendarDays className="size-6" /><span>{date}</span></div>
                           


                        </div>
                        <div className="flex "><MapPinIcon className="size-6" /><span>{location}</span></div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default AllEventsCard