

import FooterSocial from "../../components/footerSocial"
import NavBar from "../../components/navBar"
import SearchBar from "../../components/searchBar"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import { Concert } from "../../assets"
// import { Concert } from "../../assets"







const Landing = () => {
  return (

    <div><NavBar />

    <div className="flex flex-col gap-x-16 landingBg">
      
    
      <div className="flex flex-col justify-center items-center gap-y-[17rem] text-deepBlue">
        <div className="flex  justify-center items-center  pt-[15rem]">
          <SearchBar />

      

      
      </div>
      
      
        
        

        <div className="flex  justify-center items-center place-content-center ">
        


          <Section2 />

        </div>
       


      </div>


      <div className="flex  justify-center items-center pt-10 gap-20 pb-20  ">
          <div>
            <span className="flex flex-col  text-[30px] font-medium  ">
              We will Love to hear from you....
            </span>
            <p>Your feedback will help us make  <br/> our services better</p>
          </div>


          <Section3 />

        </div>
        <footer>
          <FooterSocial/>
        </footer>



















    </div>
    </div>
  )
}

export default Landing