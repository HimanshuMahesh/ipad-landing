import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Tablet, TabletSmartphone, Scale, Pencil, Keyboard, Package, Layers, ShoppingCart } from 'lucide-react'

const navItems = [
  { name: 'iPad Pro', icon: Tablet },
  { name: 'iPad Air', icon: TabletSmartphone },
  { name: 'iPad', icon: Tablet },
  { name: 'iPad mini', icon: TabletSmartphone, isNew: true },
  { name: 'Compare', icon: Scale },
  { name: 'Apple Pencil', icon: Pencil },
  { name: 'Keyboards', icon: Keyboard },
  { name: 'Accessories', icon: Package },
  { name: 'iPadOS 18', icon: Layers },
  { name: 'Shop iPad', icon: ShoppingCart },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const width = useTransform(scrollY, [0, 300], ['100vw', '80vw'])
  const margin = useTransform(scrollY, [0, 300], ['0px', 'auto'])
  const borderRadius = useTransform(scrollY, [0, 300], ['0px', '24px'])

  return (
    <section className="min-h-screen bg-black" ref={containerRef}>
      {/* Top Navigation Icons */}
      <div className="max-w-[1200px] mx-auto pt-8 px-4">
        <div className="flex justify-between items-center gap-4 overflow-x-auto pb-8">
          {navItems.map((item) => (
            <a href="#" key={item.name} className="flex flex-col items-center gap-2 min-w-fit group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <item.icon className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap group-hover:text-white transition-colors">
                {item.name}
                {item.isNew && <span className="text-blue-400 ml-1">New</span>}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-gray-900 py-3 px-4 text-center text-sm">
        <p>
          Get up to ₹6000.00 instant cashback on iPad with eligible cards.
          <sup>§</sup> Plus up to 12 months of No Cost EMI.
          <sup>‡</sup>{' '}
          <a href="#" className="text-blue-400 hover:underline">
            Shop iPad &gt;
          </a>
        </p>
      </div>

      {/* Hero Content */}
      <div className="max-w-[1200px] mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8">
          <motion.h1 
            className="text-6xl md:text-8xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            iPad
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Touch, draw and type<br />
            on one magical device.
          </motion.p>
        </div>
      </div>

      {/* Video Container with Scroll Animation */}
      <div className="relative overflow-hidden">
        <motion.div
          style={{
            width,
            margin,
            borderRadius,
          }}
          className="relative aspect-video overflow-hidden bg-gray-900"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/ipad-hero-poster.jpg"
          >
            <source src="/videos/ipad-hero-video.mp4" type="video/mp4" />
            <source src="/videos/ipad-hero-video.webm" type="video/webm" />
          </video>
          {/* Pause Button */}
          <button 
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center"
            aria-label="Pause video"
          >
            <div className="w-4 h-4 border-l-2 border-r-2 border-white" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

