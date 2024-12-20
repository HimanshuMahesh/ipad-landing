import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom';

const mainNav = [
  { name: 'Store', href: '#' },
  { name: 'Mac', href: '#' },
  { name: 'iPad', href: '#', current: true },
  { name: 'iPhone', href: '#' },
  { name: 'Watch', href: '#' },
  { name: 'AirPods', href: '#' },
  { name: 'TV & Home', href: '#' },
  { name: 'Entertainment', href: '#' },
  { name: 'Accessories', href: '#' },
  { name: 'Support', href: '#' },
]

const subNav = [
  { name: 'iPad Pro', href: '#' },
  { name: 'iPad Air', href: '#' },
  { name: 'iPad', href: '#' },
  { name: 'iPad mini', href: '#' },
  { name: 'Compare', href: '#' },
  { name: 'Apple Pencil', href: '#', badge: 'New' },
  { name: 'Keyboards', href: '#' },
  { name: 'Accessories', href: '#' },
  { name: 'iPadOS', href: '#' },
  { name: 'Shop iPad', href: '#' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-light-bg'}`}>
      {/* Main Navigation */}
      <nav className="border-b border-light-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7198 9.80736C18.6706 7.91045 20.2372 6.72727 20.3086 6.68182C19.3585 5.24318 17.8616 5.05909 17.3153 5.03864C16.0048 4.90909 14.7397 5.80227 14.0727 5.80227C13.3921 5.80227 12.3551 5.05227 11.2581 5.07273C9.82442 5.09318 8.50173 5.89091 7.77396 7.16364C6.26183 9.76364 7.40538 13.5886 8.85833 15.7432C9.57929 16.7977 10.4318 17.9727 11.5561 17.9318C12.6534 17.8909 13.0867 17.2364 14.4099 17.2364C15.7193 17.2364 16.1252 17.9318 17.2703 17.9114C18.4495 17.8909 19.1981 16.8432 19.8981 15.7841C20.7234 14.5795 21.0591 13.3955 21.0796 13.3341C21.0523 13.3205 18.7744 12.3886 18.7198 9.80736Z" fill="currentColor"/>
                  <path d="M16.2546 3.38182C16.8501 2.63182 17.2561 1.60909 17.1437 0.572727C16.2614 0.613636 15.1709 1.16591 14.5482 1.90227C13.9937 2.54318 13.5058 3.59318 13.6387 4.60227C14.6279 4.68409 15.6386 4.13182 16.2546 3.38182Z" fill="currentColor"/>
                </svg>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {mainNav.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      item.current
                        ? 'border-candy-pink text-candy-pink'
                        : 'border-transparent text-light-text-secondary hover:border-candy-blue hover:text-candy-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="p-1 rounded-full text-light-text-secondary hover:text-candy-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-candy-pink">
                <span className="sr-only">Search</span>
                <Search className="h-6 w-6" />
              </button>
              <button className="ml-3 p-1 rounded-full text-light-text-secondary hover:text-candy-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-candy-pink">
                <span className="sr-only">Shopping Bag</span>
                <ShoppingBag className="h-6 w-6" />
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-light-text-secondary hover:text-candy-blue hover:bg-light-bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-candy-pink"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="sm:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="pt-2 pb-3 space-y-1">
                {mainNav.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      item.current
                        ? 'bg-candy-pink bg-opacity-10 border-candy-pink text-candy-pink'
                        : 'border-transparent text-light-text-secondary hover:bg-light-bg hover:border-candy-blue hover:text-candy-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sub Navigation */}
      <nav className="border-b border-light-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between space-x-8 overflow-x-auto py-4">
            {subNav.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Link
                  to={item.href}
                  className="flex flex-col items-center group"
                >
                  <span className="text-light-text-secondary group-hover:text-candy-blue transition-colors duration-200 text-sm font-medium">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="mt-1 px-2 py-0.5 text-xs font-semibold bg-candy-pink text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-candy-pink to-candy-purple text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          Get up to ₹6000.00 instant cashback on iPad with eligible cards.
          <sup className="text-xs">§</sup> Plus up to 12 months of No Cost EMI.
          <sup className="text-xs">‡</sup>{' '}
          <Link to="#" className="underline hover:text-candy-yellow transition-colors duration-200">
            Shop iPad
            <span aria-hidden="true"> &gt;</span>
          </Link>
        </p>
      </div>
    </header>
  )
}

