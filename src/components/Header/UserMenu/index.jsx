import { ReactComponent as UserIcon } from '../../../assets/images/icons/user.svg'
import { ReactComponent as NewUserIcon } from '../../../assets/images/icons/new-user.svg'
import { ReactComponent as EditIcon } from '../../../assets/images/icons/edit.svg'
import { ReactComponent as BoxIcon } from '../../../assets/images/icons/box.svg'
import { ReactComponent as CardIcon } from '../../../assets/images/icons/card1.svg'
import { ReactComponent as AddressIcon } from '../../../assets/images/icons/address.svg'
import { ReactComponent as HeartIcon } from '../../../assets/images/icons/heart.svg'
import { ReactComponent as ExitIcon } from '../../../assets/images/icons/exit.svg'
import { ReactComponent as CloseIcon } from '../../../assets/images/icons/close.svg'
import { ReactComponent as ArrowSmallRightIcon } from '../../../assets/images/icons/arrow-small-right.svg'
import { ReactComponent as ArrowSmallLeftIcon } from '../../../assets/images/icons/arrow-small-left.svg'

export function UserMenu({ handleClickUserMenu }) {
  return (
    <div className="c-user-menu">
      <div className="c-user-menu__button-close">
        <button onClick={handleClickUserMenu}>
          <CloseIcon />
        </button>
      </div>
      <ul className="c-user-menu__list">
        <li className="c-user-menu__list-item">
          <a href="/">
            <UserIcon /> Login
          </a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/">
            <NewUserIcon /> Criar conta
          </a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/">
            <UserIcon /> Minha Conta
          </a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/"><EditIcon /> Detalhes da conta</a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/"><BoxIcon /> Meus pedidos</a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/"><CardIcon /> Meus cartões</a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/"><AddressIcon /> Meus endereços</a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/"><HeartIcon /> Lista de desejos</a>
        </li>
        <li className="c-user-menu__list-item">
          <a href="/"><ExitIcon /> Sair</a>
        </li>
      </ul>

      <div className="c-user-menu__back-navigation">
        <a href="/" className="c-user-menu__back-navigation-title">
          <ArrowSmallLeftIcon />  Menu Principal
        </a>
      </div>

      <div className="c-user-menu__navigation">
        <h3 className="c-user-menu__navigation-title">Departamentos</h3>
        <ul className="c-user-menu__navigation-list">
          <li>
            <a href="/">Escritório <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Home Office <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Ferramentas <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Geek <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Moda <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Móveis e Decoração <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Celulares <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Eletrônicos <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Splits e Ar-condicionado <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Pets <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">Promoções <ArrowSmallRightIcon /></a>
          </li>
          <li>
            <a href="/">MAIS <ArrowSmallRightIcon /></a>
          </li>
        </ul>
      </div>

    </div>
  )
}