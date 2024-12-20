import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { ProductLineup } from './components/sections/ProductLineup'
import { Essentials } from './components/sections/Essentials'
import { SignificantOthers } from './components/sections/SignificantOthers'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <Hero />
        <Features />
        <ProductLineup />
        <Essentials />
        <SignificantOthers />
      </main>
      <Footer />
    </div>
  )
}

