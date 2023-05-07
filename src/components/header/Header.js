import Link from 'next/link'

import Logo from 'assets/svg/logo.svg'
import SearchIcon from 'assets/svg/search.svg'
import CartIcon from 'assets/svg/cart.svg'

import stl from './Header.module.scss'

const Header = () => {
  const links = [
    'Store',
    'Mac',
    'iPad',
    'Watch',
    'AirPods',
    'TV & Home',
    'Only on Apple',
    'Entertainment',
    'Accessories',
    'Support',
  ]

  return (
    <header className={stl.header}>
      <Logo />
      {links.map(link => (
        <Link key={link} href="/">
          {link}
        </Link>
      ))}
      <SearchIcon />
      <CartIcon />
    </header>
  )
}

export default Header
