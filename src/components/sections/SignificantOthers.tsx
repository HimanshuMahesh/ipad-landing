'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { useState } from 'react'

type Section = {
  id: string
  title: string
  content: string
  image: string
}

const sections: Section[] = [
  {
    id: 'ipad-iphone',
    title: 'iPad and iPhone',
    content: 'iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.',
    image: '/images/ipadniphone.png'
  },
  {
    id: 'ipad-mac',
    title: 'iPad and Mac',
    content: 'Use your iPad as a second display for your Mac with Sidecar. Draw with Apple Pencil on your iPad while it\'s connected to your Mac. And copy and paste content between devices with Universal Clipboard.',
    image: '/images/ipadnmac.png'
  }
]

export function SignificantOthers() {
  const [activeSection, setActiveSection] = useState('ipad-iphone')

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2 
          className="text-[48px] leading-tight font-display mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Significant others, an integral part of the ecosystem.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-800 last:border-none">
                <button
                  onClick={() => setActiveSection(section.id)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                  aria-expanded={activeSection === section.id}
                >
                  <span className="text-[24px] font-display group-hover:text-gray-300 transition-colors">
                    {section.title}
                  </span>
                  {activeSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-[17px] leading-relaxed text-gray-400 pb-6 max-w-[90%]">
                        {section.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="relative h-[600px]">
            <AnimatePresence mode="wait">
              {sections.map((section) => (
                activeSection === section.id && (
                  <motion.div
                    key={section.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

