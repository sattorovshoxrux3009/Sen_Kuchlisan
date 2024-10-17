import Main from "../../sections/Main/Main"
import Projects from "../../sections/ProjectsSection/ProjectsSection"
import Support from "../../sections/Support/Support"
import Fields from "../../sections/Fields/Fields"
import EventsSection from "../../sections/EventsSection/EventsSection"
import Media from "../../sections/MediaSection/MediaSection"
import Achievments from "../../sections/Achievements/Achievments"

function Home() {
  return (
    <>
      <Main/>
      <Projects/>
      <Support/>
      <Fields/>
      <EventsSection/>
      <Media/>
      <Achievments/>
    </>
  )
}

export default Home