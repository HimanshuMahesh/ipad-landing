import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export function Essentials() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display mb-12 text-white">iPad essentials.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl relative overflow-hidden group"
            style={{ height: '550px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-[2px]"></div>
            <div className="relative h-full px-8 pt-6 pb-0 flex flex-col">
              <div>
                <h3 className="text-2xl font-display mb-3 text-white">
                  Apple Pencil
                </h3>
                <p className="text-lg text-gray-200 mb-4">
                  Dream it up. Jot it down.
                </p>
                <a href="#" className="text-lg text-blue-300 hover:text-blue-200 flex items-center group">
                  Learn more 
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="mt-auto">
                <img
                  src="/images/pencilnew.png"
                  alt="iPad with Apple Pencil showing creative artwork"
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl relative overflow-hidden group"
            style={{ height: '550px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-[2px]"></div>
            <div className="relative h-full px-8 pt-6 pb-0 flex flex-col">
              <div>
                <h3 className="text-2xl font-display mb-3 text-white">
                  Keyboards for iPad
                </h3>
                <p className="text-lg text-gray-200 mb-4">
                  Type it out. Take it with you.
                </p>
                <a href="#" className="text-lg text-blue-300 hover:text-blue-200 flex items-center group">
                  Learn more 
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="mt-auto">
                <img
                  src="/images/keyboardnew.png"
                  alt="iPad with Magic Keyboard"
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

