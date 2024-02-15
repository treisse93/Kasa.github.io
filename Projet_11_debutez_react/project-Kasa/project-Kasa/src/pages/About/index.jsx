// Components
import Banner from "../../components/Banner/Banner"
import AboutSection from "../../components/AboutSection/AboutSection"

// Style
import about from "./About.module.scss"

const About = () => {
  return (
    <main className={about.about}>
      <Banner />
      <AboutSection />
    </main>
  )
}

export default About
