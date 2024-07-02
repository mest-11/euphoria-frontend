import { Bell } from "lucide-react";
import {Icon} from "../assets"
const DashBoardNavBar = () => {
    return (
        <div>
            
            

            <div className="flex  px-10">
            <img src={Icon} alt="Logo" className="h-[40px]" />
                <div className="flex flex-1 justify-end gap-8">
                    
                    <div className="flex items-center gap-9">
                        <a className="text-sm font-medium leading-normal" href="">Home</a>
                        <a className="text-sm font-medium leading-normal" href="">Events</a>
                        <a className=" text-sm font-medium leading-normal" href="">Create Event</a>
                        <a className=" text-sm font-medium leading-normal" href="">Manage</a>
                        <Bell className="size-[20px]"/>
                        <img src="" alt="profile img" />
                    </div>

                </div>



            </div>
            <div className="w-[100%] bg-slate-100 h-[0.5px] shadow shadow-gray-400"></div>
        </div>
            )
};

            export default DashBoardNavBar;