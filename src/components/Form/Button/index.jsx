import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg"

export function Button({ color = "primary", children, className, showIcon = false, ...rest }) {
  return (
    <button
      className={`c-button c-button--${color} ${className ? className : ''}`}
      {...rest}
    >
      {showIcon && <CloseIcon className={`c-button__icon ${children ? 'c-button__icon--small' : ''}`} />}
      {children}
    </button>
  )
}
