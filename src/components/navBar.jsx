import { UserRound } from "lucide-react"
import {Logo} from "../assets"



const NavBar = () => {
  return (
    <div>
                    

    <div className="flex py-5  px-10 fixed w-full bg-white">
<img src={Logo} alt="Logo" className="h-[60px] w-[100px]" />
        <div className="flex flex-1 justify-end gap-8">    
            
            <div className="flex items-center gap-9 text-deepBlue">
                <a className="text-[16px] font-medium leading-normal" href="/">Home</a>
                <a className="text-[16px] font-medium leading-normal" href="all/events">Events</a>
                <a className=" text-[16px] font-medium leading-normal" href="login"><UserRound className="size-6 text-deepBlue"/></a>
                <a className=" text-[16px] font-medium leading-normal" href="">Contact-US</a>
     
            </div>

        </div>

    </div>
    <div className="w-[100%] bg-slate-100 h-[0.5px] shadow shadow-gray-400"></div>
</div>
  )
}

export default NavBar