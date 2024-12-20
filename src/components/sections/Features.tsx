import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const features = [
  {
    title: "Performance",
    subtitle: "Power to do it all.",
    description: "With the M1 chip, iPad has the power to easily take on demanding tasks like editing 4K video and developing 3D designs.",
    image: "/images/ipad-performance.jpg"
  },
  {
    title: "Creativity",
    subtitle: "Your canvas, your way.",
    description: "Express yourself with Apple Pencil, take notes, markup documents, and bring your ideas to life with powerful creative apps.",
    image: "/images/ipad-creative.jpg"
  },
  {
    title: "Productivity",
    subtitle: "Do more in more places.",
    description: "From powerful multitasking features to the versatility of the Magic Keyboard, iPad helps you be more productive wherever you are.",
    image: "/images/ipad-productive.jpg"
  },
  {
    title: "iPadOS",
    subtitle: "Built for iPad.",
    description: "With intuitive gestures and powerful features like widgets and App Library, iPadOS is designed to take full advantage of iPad.",
    image: "/images/ipad-os.jpg"
  }
]

export function Features() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-display mb-16 text-center text-white">Get to know iPad.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl overflow-hidden relative h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70" /> {/* Darker tint overlay */}
              <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
                <div>
                  <h3 className="text-3xl font-display mb-2">{feature.title}</h3>
                  <p className="text-xl mb-4">{feature.subtitle}</p>
                  <p className="text-gray-300 mb-8">{feature.description}</p>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center text-lg">
                  Learn more <ChevronRight className="ml-1 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

