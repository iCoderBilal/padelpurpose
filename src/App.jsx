import SmoothScroll from './components/SmoothScroll'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import StatsBar from './components/sections/StatsBar'
import Mission from './components/sections/Mission'
import Venue from './components/sections/Venue'
import VenueGallery from './components/sections/VenueGallery'
import Program from './components/sections/Program'
import Tickets from './components/sections/Tickets'
import Sponsorship from './components/sections/Sponsorship'
import PastEvents from './components/sections/PastEvents'
import Press from './components/sections/Press'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Mission />
        <Venue />
        <VenueGallery />
        <Program />
        <Tickets />
        <Sponsorship />
        <PastEvents />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
