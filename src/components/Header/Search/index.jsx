import { ReactComponent as SearchIcon } from '../../../assets/images/icons/search.svg'

export function Search() {
  return (
    <form className="c-search">
      <input 
        className="c-search__input" 
        type="text" 
        name="search" 
        id="search"
        placeholder="Busque por nome, marca, código..."
      />
      <button className="c-search__button">
        <SearchIcon />
      </button>
    </form>
  )
}