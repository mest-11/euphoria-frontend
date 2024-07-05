import { Import } from "lucide-react"
import {Flier} from "../../../assets"
import { Image1 } from "../../../assets"
import { Image2 } from "../../../assets"
import { Image3 } from "../../../assets"
import { Laugh } from "../../../assets"
import { Kingdom } from "../../../assets"

import { Image4 } from "../../../assets"
import { Image5 } from "../../../assets"
import { Image6 } from "../../../assets"
import { Image7 } from "../../../assets"
import { Festival } from "../../../assets"
const Section2 = () => {
  return (
        <div className=" flex flex-col gap-y-14 py-28 px-6 bg-slate-50">
        <span className="flex flex-col justify-center items-center text-[25px] font-medium ">
        Trending Events
        </span>
        <div className="flex flex-wrap gap-x-4 gap-y-4 px-20 justify-center items-center">
         <a href=""><img src={Flier} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce "/> </a>  
         <a href=""><img src={Image1} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce "/> </a>  
         <a href=""><img src={Image2} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce "/> </a>  
         <a href=""><img src={Image3} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce "/> </a>  
         <a href=""><img src={Image4} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce "/> </a>  
         <a href=""><img src={Image5} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce"/> </a>  
         <a href=""><img src={Image6} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce "/> </a>  
         <a href=""><img src={Image7} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce"/> </a>  
         <a href=""><img src={Festival} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce"/> </a>  
         <a href=""><img src={Laugh} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce"/> </a>  
         <a href=""><img src={Kingdom} alt="" srcset="past events fliers"  className="size-[14rem] hover:animate-bounce"/> </a>  
         
        </div>

    </div>
  )
}

export default Section2