import { Link } from 'react-scroll'
import { Tablet, TabletSmartphone, Combine, Pencil, Keyboard, Package, MonitorSmartphone, ShoppingBag } from 'lucide-react'

const products = [
  { name: 'iPad Pro', to: 'hero', icon: Tablet },
  { name: 'iPad Air', to: 'hero', icon: TabletSmartphone },
  { name: 'iPad', to: 'hero', icon: Tablet },
  { name: 'iPad mini', to: 'hero', icon: TabletSmartphone, isNew: true },
  { name: 'Compare', to: 'comparison', icon: Combine },
  { name: 'Apple Pencil', to: 'features', icon: Pencil },
  { name: 'Keyboards', to: 'features', icon: Keyboard },
  { name: 'Accessories', to: 'features', icon: Package },
  { name: 'iPadOS', to: 'features', icon: MonitorSmartphone },
  { name: 'Shop iPad', to: 'hero', icon: ShoppingBag },
]

export function SubHeader() {
  return (
    <div className="bg-dark-bg/80 backdrop-blur-md border-b border-dark-border fixed w-full top-[44px] z-40">
      <div className="max-w-content mx-auto h-subheader flex items-center px-4 overflow-x-auto">
        {products.map((product) => {
          const Icon = product.icon
          return (
            <Link
              key={product.name}
              to={product.to}
              spy={true}
              smooth={true}
              offset={-96}
              duration={500}
              className="flex flex-col items-center px-3 group min-w-fit cursor-pointer"
            >
              <Icon className="w-5 h-5 mb-1 text-dark-text-secondary group-hover:text-dark-text-primary transition-colors duration-200" />
              <span className="text-[10px] text-dark-text-secondary group-hover:text-dark-text-primary transition-colors duration-200 whitespace-nowrap">
                {product.name}
                {product.isNew && (
                  <span className="ml-1 text-apple-blue">New</span>
                )}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

