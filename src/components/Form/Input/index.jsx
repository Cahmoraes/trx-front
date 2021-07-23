import { useState } from 'react'
import { ReactComponent as EyeIcon } from '../../../assets/images/icons/eye.svg'

export function Input({
  label,
  color,
  message,
  showIcon = false,
  link,
  href,
  children,
  className,
  ...rest
}) {


  const [isFilled, setIsFilled] = useState(false)

  function handleFilled({ target }) {
    if (target.value.trim()) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }
  }

  return (
    <div className={`form-group ${className ? className : ''}`}>
      <label className="form-group__label">
        {label}
        <input
          type="text"
          onChange={handleFilled}
          onBlur={handleFilled}
          className={`
            form-group__input ${color ? color : ''} ${isFilled ? 'is-filled' : ''}
          `}
          {...rest}
        />

        {showIcon && (
          <button className="has-icon">
             <EyeIcon />
          </button>
        )}

        {link && (
          <div className="form-component">
            {link && (
              <a className="form-component__link" href={href}>
                {link}
              </a>
            )}
            {color && (
              <span className={`form-component__msg-${color}`}>{message}</span>
            )}
          </div>
        )}
      </label>
    </div>
  );
}
