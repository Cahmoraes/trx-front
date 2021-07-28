import { ReactComponent as IconClose } from "../../assets/images/icons/icon-close.svg";

export function Filter({ tag, showIcon = false }) {
  return (
    <div className={`filter ${showIcon ? 'filter--applied' : ''}`}>
      <span className="filter__tag">{tag}</span>
      { showIcon && <button className="filter__button"><IconClose /></button> }
    </div>
  )
}