import { useState } from 'react'

import { ReactComponent as SearchIcon } from '../../../assets/images/icons/search.svg'
import search1JPG from '../../../assets/images/search-1.jpg'
import search2JPG from '../../../assets/images/search-2.jpg'
import search3JPG from '../../../assets/images/search-3.jpg'
import search4JPG from '../../../assets/images/search-4.jpg'
import search5JPG from '../../../assets/images/search-5.jpg'

export function Search() {
  const [searchState, setSearchState] = useState(false)

  function handleOnKeyPress(open) {
    return () => {
      setSearchState(open)
    }
  }

  return (
    <form className="c-search">
      <input
        className="c-search__input"
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Busque por nome, marca, código..."
        onFocus={handleOnKeyPress(true)}
        onBlur={handleOnKeyPress(false)}
      />
      <button className="c-search__button">
        <SearchIcon />
      </button>
      {
        searchState && (
          <div className="c-search__suggest">
            <span className="c-search__suggest-label">Produto sugerido</span>
            <div className="c-search__suggest-results">
              <a href="/" className="c-search__suggest-result">
                <img className="c-search__suggest-image" src={search1JPG} alt="Result 1" />
                <div className="c-search__suggest-product-box">
                  <span className="c-search__suggest-product-name">
                    Cafeteira Elétrica Oster Day Light Programável 30 Xícaras
                  </span>
                  <span className="c-search__suggest-product-price">
                    R$ 161,40
                  </span>
                </div>
              </a>
              <a href="/" className="c-search__suggest-result">
                <img className="c-search__suggest-image" src={search2JPG} alt="Result 2" />
                <div className="c-search__suggest-product-box">
                  <span className="c-search__suggest-product-name">
                    Cafeteira Elétrica Oster Day Light Programável 30 Xícaras
                  </span>
                  <span className="c-search__suggest-product-price">
                    R$ 161,40
                  </span>
                </div>
              </a>
              <a href="/" className="c-search__suggest-result">
                <img className="c-search__suggest-image" src={search3JPG} alt="Result 3" />
                <div className="c-search__suggest-product-box">
                  <span className="c-search__suggest-product-name">
                    Cafeteira Elétrica Oster Day Light Programável 30 Xícaras
                  </span>
                  <span className="c-search__suggest-product-price">
                    R$ 161,40
                  </span>
                </div>
              </a>
              <a href="/" className="c-search__suggest-result">
                <img className="c-search__suggest-image" src={search4JPG} alt="Result 4" />
                <div className="c-search__suggest-product-box">
                  <span className="c-search__suggest-product-name">
                    Cafeteira Elétrica Oster Day Light Programável 30 Xícaras
                  </span>
                  <span className="c-search__suggest-product-price">
                    R$ 161,40
                  </span>
                </div>
              </a>
              <a href="/" className="c-search__suggest-result">
                <img className="c-search__suggest-image" src={search5JPG} alt="Result 5" />
                <div className="c-search__suggest-product-box">
                  <span className="c-search__suggest-product-name">
                    Cafeteira Elétrica Oster Day Light Programável 30 Xícaras
                  </span>
                  <span className="c-search__suggest-product-price">
                    R$ 161,40
                  </span>
                </div>
              </a>
            </div>
          </div>
        )
      }
    </form>
  )
}