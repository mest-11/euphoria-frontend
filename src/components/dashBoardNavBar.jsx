import { Bell } from "lucide-react";
import {Icon} from "../assets"
import {Logo} from "../assets"
const DashBoardNavBar = () => {
    return (
        <div>
            
            

            <div className="flex   p-4 fixed w-full">
            <img src={Logo} alt="Logo" className="h-[60px] w-[100px]" />
                <div className="flex flex-1 justify-end gap-8">
                    
                    <div className="flex items-center gap-9 text-deepBlue">
                        <a className="text-[16px] font-medium leading-normal" href="/">Home</a>
                        <a className="text-[16px] font-medium leading-normal" href="">Events</a>
                        <a className=" text-[16px] font-medium leading-normal" href="create/event">Create Event</a>
                        <a className=" text-[16px] font-medium leading-normal" href="">Manage</a>
                        <Bell className="size-[20px] animate-bounce"/>
                        <img src="" alt="profile img "  className="rounded-full size-10 bg-black"/>
                    </div>

                </div>



            </div>
            <div className="w-[100%] bg-slate-100 h-[0.5px] shadow shadow-gray-400"></div>
        </div>
            )
};

            export default DashBoardNavBar;