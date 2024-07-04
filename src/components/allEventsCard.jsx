import { CalendarDays, MapPin, MapPinIcon, ReceiptCent } from "lucide-react"
import { Flier } from "../assets"
const AllEventsCard = ({ eventName, discription, price, date, location }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-blue-300 w-[280px] h-[330px]">

                <div className="flex flex-col justify-center items-center gap-y-3">
                    <img src={Flier} alt="" className="size-[150px] rounded-[5px] hover:size-[200px]" />


                    <div className="flex flex-col  text-slate-100  subpixel-antialiased w-[250px] h-[110px] font-thin p-2 gap-y-2">
                        <div className="flex flex-col gap-x-2">
                        <span className="flex justify-center">{eventName}</span>
                        <span>{discription}</span>
                        </div>
                        

                        <div className="flex justify-center gap-x-2 ">

                            <div className="flex "><ReceiptCent className="size-6" />
                                <span>{price}</span>
                            </div>
                            <div className="flex "> <CalendarDays className="size-6" /><span>{date}</span></div>
                            <div className="flex "><MapPinIcon className="size-6" /><span>{location}</span></div>


                        </div>







                    </div>



                </div>

            </div>






        </div>

    )
}

export default AllEventsCard