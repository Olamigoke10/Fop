import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutIntro from '../Components/AboutIntro'
import Relevant from '../Components/Relevant'
import ResourcesTeaser from '../Components/ResourcesTeaser'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <Relevant />
        <ResourcesTeaser />
      </main>
      <Footer />
    </>
  )
}

export default Homepage
