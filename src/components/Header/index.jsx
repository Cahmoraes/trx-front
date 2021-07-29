import { Search } from './Search';
import logoSvg from '../../assets/images/icons/logo.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/images/icons/cart-icon.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="l-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3 l-header__logo">
            <Link to="/home">
              <img src={logoSvg} alt="TRX" />
            </Link>
          </div>
          <div className="col-6 l-header__search">
            <Search />
          </div>
          <div className="col-3 l-header__user-menu">
            <button>
              <UserIcon />
            </button>
            <button>
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
