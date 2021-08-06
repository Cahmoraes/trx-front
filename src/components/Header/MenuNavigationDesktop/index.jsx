import { useState } from 'react'
import { useOverlay } from '../../../hooks/useOverlay'

export function MenuNavigation() {
  const { changeOverlayVisibility } = useOverlay()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleMouseOver() {
    setMenuIsOpen(true)
    changeOverlayVisibility()
  }

  function handleMouseLeave() {
    if (menuIsOpen) {
      setMenuIsOpen(false)
      changeOverlayVisibility(false)
    }
  }

  return (
    <>
      <nav className="col-12 c-menu-navigation" onMouseLeave={handleMouseLeave}>
        <ul className="c-menu-navigation__top-list">
          <li onMouseOver={handleMouseOver}>
            <a href="/">Escritório</a>
          </li>
          <li>
            <a href="/">Home Office</a>
          </li>
          <li>
            <a href="/">Ferramentas</a>
          </li>
          <li>
            <a href="/">Geek</a>
          </li>
          <li>
            <a href="/">Moda</a>
          </li>
          <li>
            <a href="/">Móveis e Decoração</a>
          </li>
          <li>
            <a href="/">Celulares</a>
          </li>
          <li>
            <a href="/">Eletrônicos</a>
          </li>
          <li>
            <a href="/">Splits e Ar-condicionado</a>
          </li>
          <li>
            <a href="/">Pets</a>
          </li>
          <li>
            <a href="/">Promoções</a>
          </li>
          <li>
            <a href="/">MAIS</a>
          </li>
        </ul>

        {menuIsOpen && (
          <div className="c-menu-navigation__container">
            <div className="c-menu-navigation__content">
              <div className="c-menu-navigation__box">
                <h3 className="c-menu-navigation__box-title">Informática</h3>
                <ul className="c-menu-navigation__bottom-list">
                  <li className="c-menu-navigation__box-item"><a href="/">Notebook</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Notebook Gamer</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">PC Gamer</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Computador</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Monitor</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Tablet</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Impressora</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Projetor</a></li>
                </ul>
              </div>

              <div className="c-menu-navigation__box">
                <h3 className="c-menu-navigation__box-title">Acessórios</h3>
                <ul className="c-menu-navigation__bottom-list">
                  <li className="c-menu-navigation__box-item"><a href="/">Capa para notebook</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Mouse</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Teclado</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Pen drive</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">HD externo</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Adaptador</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Fone de ouvido</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Headset</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Mochila</a></li>
                </ul>
              </div>

              <div className="c-menu-navigation__box">
                <h3 className="c-menu-navigation__box-title">Eletroportáteis</h3>
                <ul className="c-menu-navigation__bottom-list">
                  <li className="c-menu-navigation__box-item"><a href="/">Smart Home</a></li>
                  <li className="c-menu-navigation__box-item c-menu-navigation__box-item--active">
                    <a href="/">Cafeteira</a>
                  </li>
                  <li className="c-menu-navigation__box-item"><a href="/">Torradeira</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Aquecedor</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Umidificador de ar</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Ar-condicionado</a></li>
                  <li className="c-menu-navigation__box-item"><a href="/">Ventilador</a></li>
                </ul>
              </div>

              <div className="c-menu-navigation__box">
                <ul className="c-menu-navigation__bottom-list">
                  <li className="c-menu-navigation__box-title"><a href="/">Cadeiras Giratórias</a></li>
                  <li className="c-menu-navigation__box-title"><a href="/">Escrivaninhas</a></li>
                  <li className="c-menu-navigation__box-title"><a href="/">Organizadores</a></li>
                  <li className="c-menu-navigation__box-title"><a href="/">Kits</a></li>
                  <li className="c-menu-navigation__box-title"><a href="/">Papelarias</a></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}