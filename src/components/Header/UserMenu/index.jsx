
import { ReactComponent as UserIcon } from '../../../assets/images/icons/user.svg'
import { ReactComponent as NewUserIcon } from '../../../assets/images/icons/newUser.svg'
import { ReactComponent as EditIcon } from '../../../assets/images/icons/edit.svg'
import { ReactComponent as BoxIcon } from '../../../assets/images/icons/box.svg'
import { ReactComponent as CardIcon } from '../../../assets/images/icons/card1.svg'
import { ReactComponent as AddressIcon } from '../../../assets/images/icons/address.svg'
import { ReactComponent as HeartIcon } from '../../../assets/images/icons/heart.svg'
import { ReactComponent as ExitIcon } from '../../../assets/images/icons/exit.svg'

export function UserMenu() {
  return (
    <div className="l-header__userMenu">
      <ul className="l-header__userMenu-list">
        <li className="l-header__userMenu-list-item">
          <a href="/">
            <UserIcon /> Login
          </a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/">
            <NewUserIcon /> Criar conta
          </a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/">
            <UserIcon /> Minha Conta
          </a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/"><EditIcon /> Detalhes da conta</a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/"><BoxIcon /> Meus pedidos</a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/"><CardIcon /> Meus cartões</a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/"><AddressIcon /> Meus endereços</a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/"><HeartIcon /> Lista de desejos</a>
        </li>
        <li className="l-header__userMenu-list-item">
          <a href="/"><ExitIcon /> Sair</a>
        </li>
      </ul>
    </div>
  )
}