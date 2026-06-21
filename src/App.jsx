// App — root component. Renders the nav and all sections in page order.

import Nav from './components/Nav'
import Hero from './sections/Hero'
import MeetTheBarista from './sections/MeetTheBarista'
import HouseSpecialties from './sections/HouseSpecialties'
import WhereITrained from './sections/WhereITrained'
import BehindTheCounter from './sections/BehindTheCounter'
import TheMenu from './sections/TheMenu'
import TheToolkit from './sections/TheToolkit'
import WhatsBrewing from './sections/WhatsBrewing'
import ComeFindMe from './sections/ComeFindMe'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MeetTheBarista />
        <HouseSpecialties />
        <WhereITrained />
        <BehindTheCounter />
        <TheMenu />
        <TheToolkit />
        <WhatsBrewing />
        <ComeFindMe />
      </main>
      <Footer />
    </>
  )
}
