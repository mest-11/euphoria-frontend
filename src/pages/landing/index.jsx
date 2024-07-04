

import NavBar from "../../components/navBar"
import SearchBar from "../../components/searchBar"
import { HeroImg2 } from "../../assets"


const Landing = () => {
  return (

    <div className="flex flex-col relative">
      <NavBar />

      <div className="flex flex-col justify-center items-center pt-60">
        <SearchBar />

        <img src={HeroImg2} alt="hero image" className="" />
      </div>




    </div>
  )
}

export default Landing