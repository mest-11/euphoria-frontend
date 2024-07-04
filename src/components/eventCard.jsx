import { CalendarDays, MapPin, ReceiptCent, Trash2 } from "lucide-react"


const EventCard = ({ flier, eventName, discription, date, location, price }) => {
    return (
        <div className="flex gap-x-5 justify-center gap-y-5 ">
            <img src={flier} alt="event flier" className="size-[200px] rounded-[5px] hover:size-[250px] ease-in-out duration-300" />

            <div className=" flex flex-col justify-center items-center h-[200px] w-[400px] bg-deepBlue rounded-[5px] p-2 relative shadow shadow-amber-200/50 ">
                <div className="w-6 h-6 rounded-[5px] flex justify-center items-center bg-amber-400 top-2 right-4 absolute hover:w-6">
                    <Trash2 className="size-4 text-cyan-100 hover:text-black"/>
                </div>

                <div className="flex flex-col  text-slate-100 gap-y-5 subpixel-antialiased w-[300px] h-[150px] font-thin ">
                    <span className="text-[20px] flex flex-col justify-center items-center ">{eventName}</span>
                    <span className="text-[15px] h-[150px]">{discription}</span>

                </div>
                
                <div className="flex gap-10 text-white">

                    <div className="flex "> <ReceiptCent className="size-6 "/><span>{price}</span> </div>
                   

                     <div className="flex "><CalendarDays className="size-6"/> <span>{date}</span></div>
                     <div className="flex "> <span><MapPin className="siz-6"/></span> <span>{location}</span></div>

              
                
                </div>




            </div>
        </div>
    )
}


export default EventCard