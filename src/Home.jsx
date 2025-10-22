import Hero from './Components/Hero/Hero'
import PhotoApp from './Components/Gallery/PhotoApp'
import About from './Components/About_us/About'
import Services from './Components/Services/Services'
import Form from './Components/Form/Form'
import Testimonials from './Components/Testimonials/Tesitimonial'
import NewHero from './Components/NewHero.jsx/NewHero'
import UpFooter from './Components/UpFooter/UpFooter'
import BookNow from './Components/BookNow/BookNow'
import BgBook from './Components/BgBook/BgBook'
import { Analytics } from "@vercel/analytics/react"

function Home() {

  return (
    <>
    {/* <Hero/> */}
    <Analytics/>

    <NewHero />
    <PhotoApp/>
    {/* <About/> */}
    {/* <Services/> */}
    {/* <Form/> */}
    <Testimonials/>
    <BgBook/>
    <BookNow />
    <UpFooter />
    {/* <Poster /> */}
    </>
  )
}

export default Home
