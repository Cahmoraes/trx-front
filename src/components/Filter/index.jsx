import { ReactComponent as IconClose } from "../../assets/images/icons/close.svg";

export function Filter({ tag, showIcon = false }) {
  return (
    <div className={`c-filter ${showIcon ? 'c-filter--applied' : ''}`}>
      <span className="c-filter__tag">{tag}</span>
      { showIcon && <button className="c-filter__button"><IconClose /></button> }
    </div>
  )
}