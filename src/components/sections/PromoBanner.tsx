import { Link } from 'react-router-dom'

export function PromoBanner() {
  return (
    <div className="bg-[#1d1d1f] py-3 px-4 text-center border-b border-[#424245]">
      <p className="text-sm text-white">
        Get up to ₹6000.00 instant cashback on iPad with eligible cards.
        <sup>§</sup> Plus up to 12 months of No Cost EMI.
        <sup>‡</sup>{' '}
        <Link to="#" className="text-apple-blue hover:underline">
          Shop iPad <span aria-hidden="true">›</span>
        </Link>
      </p>
    </div>
  )
}

