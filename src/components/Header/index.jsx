import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'
import { MenuNavigation } from './MenuNavigationDesktop'

import logoSvg from '../../assets/images/icons/logo.svg'
import { ReactComponent as UserMenuDownIcon } from '../../assets/images/icons/user-menu-down.svg'
import { ReactComponent as UserMenuUpIcon } from '../../assets/images/icons/user-menu-up.svg'
import { ReactComponent as CartIcon } from '../../assets/images/icons/cart-icon.svg'
import { ReactComponent as MenuMobileIcon } from '../../assets/images/icons/menu-mobile.svg'
import { UserMenu } from './UserMenu'


export function Header() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  function handleClickUserMenu() {
    setUserMenuOpen(!userMenuOpen)
  }

  return (
    <>
      <header className="l-header">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            <div className="col-1 l-header__menu-navigation-mobile">
              <button onClick={handleClickUserMenu}>
                <MenuMobileIcon />
              </button>
            </div>

            <div className="col-3 col-lg-2 l-header__logo">
              <Link to="/home">
                <img src={logoSvg} alt="TRX" />
              </Link>
            </div>

            <div className="col-1 col-md-6 l-header__search-desk">
              <Search />
            </div>

            <div className="col-1 l-header__user-menu">
              <div className="l-header__search-mobile">
                <Search />
              </div>

              <button className="l-header__userIcon" onClick={handleClickUserMenu}>
                { userMenuOpen ? <UserMenuUpIcon /> :  <UserMenuDownIcon />}
              </button>

              { userMenuOpen && <UserMenu handleClickUserMenu={handleClickUserMenu} /> }

              <button className="l-header__cartIcon">
                <CartIcon />
              </button>
            </div>

          </div>
        </div>
      </header>

      <div className="container-fluid l-header__menu-navigation-desk">
        <div className="row">
          <MenuNavigation />
        </div>
      </div>
    </>
  )
}
