

import NavBar from "../../components/navBar"
import SearchBar from "../../components/searchBar"

import Footer from "../../components/footer"

import Section2 from "./components/section2"
import Section3 from "./components/section3"





const Landing = () => {
  return (

    <div className="flex flex-col relative">
      <NavBar />

      <div className="flex flex-col justify-center items-center pt-60">
        <SearchBar />

        
        
      </div>

      <Section2/>

      <Section3/>
      


      




    </div>
  )
}

export default Landing