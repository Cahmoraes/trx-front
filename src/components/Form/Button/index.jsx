import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg"

const HIDE_SCROLL = 'u-hide-scroll'

export function Button({ color = "primary", children, className, showIcon = false, overflowHidden, onClick, ...rest }) {

  function hideBodyScroll (callback) {
    return () => {
      if (typeof callback === 'function') callback()
      const body = document.body
      if (body.classList.contains(HIDE_SCROLL)) {
        body.classList.remove(HIDE_SCROLL)
        return
      }
      body.classList.add(HIDE_SCROLL)
    }
  }

  return (
    <button
      className={`${color !== 'none' ? (`c-button c-button--${color}`) : 'c-button--none'} ${className ? className : ''}`}
      onClick={overflowHidden ? hideBodyScroll(onClick) : onClick}
      {...rest}
    >
      {showIcon && <CloseIcon className={`c-button__icon ${children ? 'c-button__icon--small' : ''}`} />}
      {children}
    </button>
  )
}
