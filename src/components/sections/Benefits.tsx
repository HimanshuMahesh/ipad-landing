'use client'

import { motion } from 'framer-motion'
import { CreditCard, RefreshCcw, GraduationCap, Truck, Plus } from 'lucide-react'

const benefits = [
  {
    icon: CreditCard,
    title: "Monthly payment options available.",
    description: "Choose easy way to finance with convenient monthly payment options.",
  },
  {
    icon: RefreshCcw,
    title: "Save with Apple Trade In.",
    description: "Get credit towards your next iPad when you trade in an eligible device at an Apple Store.",
  },
  {
    icon: GraduationCap,
    title: "Save on a new iPad with education pricing.",
    description: "Available to university students and educators.",
  },
  {
    icon: Truck,
    title: "Get flexible delivery and easy pickup.",
    description: "Get free delivery or pick up at your Apple Store.",
  }
]

export function Benefits() {
  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-[48px] leading-tight font-display max-w-[600px]">
            Why Apple is the best place to buy iPad.
          </h2>
          <a href="#" className="text-blue-600 hover:underline text-[17px]">
            Shop iPad &gt;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-3xl p-8 shadow-sm relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <benefit.icon className="w-8 h-8 mb-6 text-black" strokeWidth={1} />
              <h3 className="text-[21px] font-display mb-2">
                {benefit.title}
              </h3>
              <p className="text-[17px] text-gray-600 mb-12">
                {benefit.description}
              </p>
              <button 
                className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#1d1d1f] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Learn more"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

