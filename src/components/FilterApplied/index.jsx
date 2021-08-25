import { useState } from 'react'
import { Filter } from '../Filter'

import { ReactComponent as TraceIcon } from '../../assets/images/icons/less.svg'
import { ReactComponent as PlusIcon } from '../../assets/images/icons/plus.svg'

const configItems = {
  title: 'Filtros Aplicados',
  items: [
    'abaixo de R$ 100',
    'R$ 100 - R$ 200',
  ],
}

export function FilterApplied({ config = configItems, className }) {

  const [buttonFilterState, setButtonFilterState] = useState(true)

  function handleClickButtonFilter() {
    setButtonFilterState((state) => !state)
  }

  return (
    <div className={`c-filter-applied ${className ? className : ''}`}>

      <div className="c-filter-applied__title-container">
        <h3 className="c-filter-applied__title">
          {config.title}
        </h3>
        <button className="c-filter-applied__button" onClick={handleClickButtonFilter}>
          {buttonFilterState ? <TraceIcon /> : <PlusIcon />}
        </button>
      </div>

      <div className="c-filter-applied__list">
        {
          buttonFilterState && config.items.map((item) => (
            <Filter showIcon className="c-filter-applied__item" tag={item} key={item} />
          ))
        }
      </div>

      <a className="c-filter-applied__clear">Limpar filtros</a>
      <div className="c-filter-applied__line"></div>
    </div>
  )
}
