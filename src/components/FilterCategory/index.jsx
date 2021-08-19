import { useState } from 'react'
import { Button } from '../Form/Button'

import { ReactComponent as TraceIcon } from '../../assets/images/icons/less.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close.svg'
import { ReactComponent as PlusIcon } from '../../assets/images/icons/plus.svg'

export function FilterCategory() {

  const [buttonFilterState, setButtonFilterState] = useState(true)

  function handleClickButtonFilter() {
    setButtonFilterState((state) => !state)
  }

  return (
    <div className="c-filter-category">
      <div className="c-filter-category__container">
        <div className="c-filter-category__title-container">
          <h3 className="c-filter-category__title">
            Categoria
          </h3>
          <Button color="none" className="c-filter-category__button" onClick={handleClickButtonFilter}>
            {buttonFilterState ? <TraceIcon /> : <PlusIcon />}
          </Button>
        </div>

        {buttonFilterState && (
          <>
            <h4 className="c-filter-category__subtitle">
              Home Office
            </h4>

            <div className="c-filter-category__list-title">
              <p className="c-filter-category__list-title-text">Informática (24.660)</p>
              <button className="c-filter-category__button-close">
                <CloseIcon />
              </button>
            </div>
            <ul className="c-filter-category__list">
              <li className="c-filter-category__item"><a href="/">Notebook (9390)</a></li>
              <li className="c-filter-category__item"><a href="/">Notebook Gamer (7745)</a></li>
              <li className="c-filter-category__item"><a href="/">PC Gamer (1243)</a></li>
              <li className="c-filter-category__item"><a href="/">Tablet (2113)</a></li>
              <li className="c-filter-category__item"><a href="/">Impressora (1243)</a></li>
              <li className="c-filter-category__item"><a href="/">Projetor (870)</a></li>
            </ul>
          </>
        )}
      </div>
      <div className="c-filter-category__line"></div>
    </div>
  )
}
