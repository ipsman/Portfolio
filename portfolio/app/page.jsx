import AboutMe from "./Sections/aboutMe"
import HowItsMade from "./Sections/howItsMade"
import Welcome from "./Sections/welcome"
import End from "./Sections/end"
import Skills from "./Sections/skills"

export default function Home(){
  return (
    <main className='h-screen w-screen font-raleway font-thin scroll-smooth text-white '>
      <div className="xl:absolute lg:absolute md:absolute sm:relative xsm:relative">
          <Welcome/>

          <AboutMe/>

          <Skills/>

          <HowItsMade/>

          <End/>
      </div>
  </main>
  )
}