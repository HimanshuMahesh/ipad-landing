
import { ArrowUpRight } from 'lucide-react'

const AppleLogo = () => (
  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" fill="#ffffff"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex-shrink-0">
            <AppleLogo />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h3 className="font-display text-xl mb-4">About iPad</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-gray-300">Overview</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Tech Specs</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Compare</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Newsletter</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-gray-300">iPad Support</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">AppleCare+</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">User Guide</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:text-gray-300 inline-flex items-center">
                    Instagram
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-300 inline-flex items-center">
                    Twitter
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-300 inline-flex items-center">
                    YouTube
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">Copyright © 2024 Apple Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm hover:text-gray-300 inline-flex items-center"
            >
              Back to top
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

