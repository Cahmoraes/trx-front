import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg";

export function Button ({ color = "primary", bold = false, children, showIcon = false, ...rest }) {
  return (
    <button
      className={`c-button ${color} ${bold ? 'u-bold':''}`}
      {...rest}
    >
      { showIcon &&  <CloseIcon className={`c-button__icon ${children ? 'c-button__icon--small':''}`} />}
      {children}
    </button>
  )
}
