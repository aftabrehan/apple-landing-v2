import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import Logo from 'assets/svg/logo.svg'
import SearchIcon from 'assets/svg/search.svg'
import CartIcon from 'assets/svg/cart.svg'
import HamburgerIcon from 'assets/svg/hamburger.svg'
import CrossIcon from 'assets/svg/cross.svg'

import stl from './Header.module.scss'

const Header = () => {
  const [isHeaderExpanded, setIsHeaderExpended] = useState(false)

  const links = [
    'Store',
    'Mac',
    'iPad',
    'Watch',
    'AirPods',
    'TV & Home',
    'Only on Apple',
    'Accessories',
    'Support',
  ]

  return (
    <header className={clsx(stl.header, isHeaderExpanded && stl.expanded)}>
      <Logo />

      <div className={stl.links}>
        {links.map(link => (
          <Link key={link} href="/">
            {link}
          </Link>
        ))}
      </div>

      <div className={stl.icons}>
        <SearchIcon />
        <CartIcon />
        <button
          onClick={() => setIsHeaderExpended(!isHeaderExpanded)}
          className={stl.hamburgerIcon}
        >
          {isHeaderExpanded ? <CrossIcon /> : <HamburgerIcon />}
        </button>
      </div>
    </header>
  )
}

export default Header
