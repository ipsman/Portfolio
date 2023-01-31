import AboutMe from "./Sections/aboutMe"
import HowItsMade from "./Sections/howItsMade"
import Welcome from "./Sections/welcome"
import End from "./Sections/end"
import NavBar from "./Nav/navBar"
import LangSelect from "./Nav/langSelect"

export default function Home(){
  return (
    <main className='h-screen w-screen font-raleway font-thin scroll-smooth text-white '>
      <NavBar/>
      <LangSelect/>
      <div className="absolute">
          
          <Welcome/>

          <AboutMe/>

          <HowItsMade/>

          <End/>
      </div>
  </main>
  )
}