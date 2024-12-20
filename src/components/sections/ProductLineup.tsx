
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const products = [
  {
    name: "iPad Pro",
    description: "The ultimate iPad experience with the most advanced technology.",
    image: "/images/ipadpro.png",
    price: "From $799",
    colors: ["#1D1D1F", "#F5F5F7"]
  },
  {
    name: "iPad Air",
    description: "Serious performance in a thin and light design.",
    image: "/images/ipad-air.png",
    price: "From $599",
    colors: ["#1D1D1F", "#A0C4E2", "#F5F5F7", "#FFE681"]
  },
  {
    name: "iPad",
    description: "The colorful all-screen iPad for the things you do every day.",
    image: "/images/ipadnew.png",
    price: "From $449",
    colors: ["#1D1D1F", "#2997FF", "#FFE681", "#F5F5F7"]
  },
  {
    name: "iPad mini",
    description: "The full iPad experience designed to fit in one hand.",
    image: "/images/ipad-mini.png",
    price: "From $499",
    colors: ["#1D1D1F", "#F5F5F7", "#FFE681", "#FF9500"],
    isNew: true
  }
]

export function ProductLineup() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-display">Explore the line-up.</h2>
          <a href="#" className="text-xl text-blue-400 hover:text-blue-300 flex items-center">
            Compare all models <ChevronRight className="ml-1 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative mb-8 group w-full aspect-[3/4] flex items-center justify-center overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-2 mb-4 justify-center">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-600"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <h3 className="text-2xl font-display mb-2">
                  {product.name}
                  {product.isNew && (
                    <span className="text-orange-500 text-sm ml-2 font-normal align-top">
                      New
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 mb-2 h-12 overflow-hidden">
                  {product.description}
                </p>
                <p className="text-lg mb-4">
                  {product.price}
                </p>
                <div className="flex gap-6 text-lg">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Learn more <ChevronRight className="inline ml-1 w-4 h-4" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Buy <ChevronRight className="inline ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

