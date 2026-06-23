import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Nav from './components/Nav'
import Hero from './sections/Hero'
import MeetTheBarista from './sections/MeetTheBarista'
import TheMenu from './sections/TheMenu'
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
    <div className="min-h-screen bg-canvas">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Right-rail offset on desktop; top-bar offset on mobile */}
      <main className="md:mr-[240px] pt-[52px] md:pt-0">
        <div className="mx-auto px-6 md:px-16" style={{ maxWidth: '1000px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {activeTab === 'home'    && <Hero onNavigate={setActiveTab} />}
              {activeTab === 'barista' && <MeetTheBarista />}
              {activeTab === 'menu'    && <TheMenu />}
              {activeTab === 'brewing' && <WhatsBrewing />}
              {activeTab === 'contact' && <ComeFindMe />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
