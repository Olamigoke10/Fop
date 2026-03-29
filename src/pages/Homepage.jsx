import AboutIntro from '../Components/AboutIntro'
import Hero from '../Components/Hero'
import Newsletter from '../Components/Newsletter'
import Relevant from '../Components/Relevant'
import ResourcesTeaser from '../Components/ResourcesTeaser'
import VisitSection from '../Components/VisitSection'
import { usePageSeo } from '../utils/usePageSeo'

const HomePage = () => {
  usePageSeo({
    title: 'Flames of Power | Faith & Fellowship',
    description:
      'Flames of Power — a faith community. Join us for worship, Bible study, and fellowship.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <VisitSection />
      <AboutIntro />
      <Relevant />
      <ResourcesTeaser />
      <Newsletter />
    </>
  )
}

export default HomePage
