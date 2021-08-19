import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'
import { MenuNavigation } from './MenuNavigationDesktop'
import { UserMenu } from './UserMenu'
import { SideCart } from '../SideCart'
import { useSideCart } from '../../hooks/useSideCart'

import logoSvg from '../../assets/images/icons/logo.svg'
import { ReactComponent as UserMenuDownIcon } from '../../assets/images/icons/user-menu-down.svg'
import { ReactComponent as UserMenuUpIcon } from '../../assets/images/icons/user-menu-up.svg'
import { ReactComponent as CartIcon } from '../../assets/images/icons/cart-icon.svg'
import { ReactComponent as MenuMobileIcon } from '../../assets/images/icons/menu-mobile.svg'

const POSITION_RELATIVE_CLASS = 'u-position-relative'

export function Header() {
	const [userMenuOpen, setUserMenuOpen] = useState(false)
	const { sideCartState, handleClickToggleSideCart } = useSideCart()
  const headerContainerRef = useRef(null)

	function handleClickUserMenu() {
    if (headerContainerRef.current) {
      const headerElement = headerContainerRef.current
      if (headerElement.classList.contains(POSITION_RELATIVE_CLASS)) {
        headerElement.classList.remove(POSITION_RELATIVE_CLASS)
      } else {
        headerElement.classList.add(POSITION_RELATIVE_CLASS)
      }
    }
		setUserMenuOpen(!userMenuOpen)
	}

	return (
		<>
			<header className="l-header">
				<div className="container u-position-relative" ref={headerContainerRef}>
					<div className="row align-items-center justify-content-between">
						<div className="col-1 l-header__menu-navigation-mobile">
							<button type="button" onClick={handleClickUserMenu}>
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

							<button
								type="button"
								className="l-header__userIcon"
								onClick={handleClickUserMenu}
							>
								{userMenuOpen ? <UserMenuUpIcon /> : <UserMenuDownIcon />}
							</button>

							{userMenuOpen && <UserMenu handleClickUserMenu={handleClickUserMenu} />}

							<button
								type="button"
								className="l-header__cartIcon"
								onClick={handleClickToggleSideCart}
							>
								<CartIcon />
							</button>
						</div>

						{sideCartState && (
							<SideCart cart handleClickToggleSideCart={handleClickToggleSideCart} />
						)}
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
