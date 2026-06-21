// App — tab-based routing via useState. Switching tabs scrolls to top and fades in new content.

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Nav from './components/Nav'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import MeetTheBarista from './sections/MeetTheBarista'
import WhereITrained from './sections/WhereITrained'
import HouseSpecialties from './sections/HouseSpecialties'
import BehindTheCounter from './sections/BehindTheCounter'
import TheMenu from './sections/TheMenu'
import TheToolkit from './sections/TheToolkit'
import WhatsBrewing from './sections/WhatsBrewing'
import ComeFindMe from './sections/ComeFindMe'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.18 } },
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  return (
    <>
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} variants={pageVariants} initial="initial" animate="animate" exit="exit">

            {activeTab === 'home' && (
              <Hero onNavigate={setActiveTab} />
            )}

            {activeTab === 'about' && (
              <>
                <MeetTheBarista />
                <WhereITrained />
              </>
            )}

            {activeTab === 'menu' && (
              <>
                <HouseSpecialties />
                <BehindTheCounter />
                <TheMenu />
                <TheToolkit />
              </>
            )}

            {activeTab === 'brewing' && <WhatsBrewing />}

            {activeTab === 'contact' && <ComeFindMe />}

          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onTabChange={setActiveTab} />
    </>
  )
}
