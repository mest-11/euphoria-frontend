import {Logo} from "../assets"


const Footer = () => {
  return (
    <footer className="flex flex-col py-10 px-10 ">
      <div className="h-[0.5px] w-auto bg-gray-100 shadow-lg shadow-gray-200 mb-2"></div>
      <img src={Logo} alt="" className="h-[50px] w-[100px] right-3 " />
      <div>
       
      </div>


    </footer>
  )
}

export default Footer