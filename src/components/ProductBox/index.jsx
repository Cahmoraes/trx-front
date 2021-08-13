import { useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search.svg'
import { ProductSpyModal } from './ProductSpyModal'

export function ProductBox({ product }) {
  const [productSpyModalState, setProductSpyModalState] = useState(false)
  
  function handleClickSpyModal () {
    setProductSpyModalState((state) => !state)
  }

  return (
    <div className="c-product-box">
      <img className="c-product-box__image" src={product.src} alt={product.name} />
      <div className="c-product-box__content">
        <h3 className="c-product-box__name">{product.name}</h3>
      </div>
      <div className="c-product-box__price-container">
        <span className="c-product-box__old-price">{product.oldPrice ? `de ${product.oldPrice}` : ''}</span>
        <span className="c-product-box__price">{product.oldPrice ? 'por ' : ''} {product.price}</span>
      </div>
      <button className="c-product-box__button" onClick={handleClickSpyModal}>
        <SearchIcon /> Espiar
      </button>
      {
        productSpyModalState && <ProductSpyModal setProductSpyModalState={setProductSpyModalState}  />
      }
    </div>
  )
}