import { useState } from 'react'
import { Filter } from '../Filter'

import { ReactComponent as TraceIcon } from '../../assets/images/icons/less.svg'
import { ReactComponent as PlusIcon } from '../../assets/images/icons/plus.svg'

const configItems = {
  title: 'Preço',
  items: [
    'abaixo de R$ 100',
    'R$ 100 - R$ 200',
    'R$ 200 - R$ 500',
    'R$ 500 a R$ 1.000',
    'R$ 1.000 a R$ 2.500',
    'R$ 2.500 a R$ 5.000',
  ],
}

export function FilterDefault({ config = configItems }) {

  const [buttonFilterState, setButtonFilterState] = useState(true)

  function handleClickButtonFilter() {
    setButtonFilterState((state) => !state)
  }

  return (
    <div className="c-filter-default">

      <div className="c-filter-default__title-container">
        <h3 className="c-filter-default__title">
          {config.title}
        </h3>
        <button className="c-filter-default__button" onClick={handleClickButtonFilter}>
          {buttonFilterState ? <TraceIcon /> : <PlusIcon />}
        </button>
      </div>

      <div className="c-filter-default__list">
        {
          buttonFilterState && config.items.map((item) => (
            <Filter className="c-filter-default__item" tag={item} key={item} />
          ))
        }
      </div>

      <div className="c-filter-default__line"></div>
    </div>
  )
}
