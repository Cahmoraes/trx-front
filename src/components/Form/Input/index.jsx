export function Input({
  label,
  color,
  message,
  link,
  href,
  children,
  ...rest
}) {

  return (
    <div className="form-group">
      <label className="form-group__label">
        {label}
        <input type="text" className={`form-group__input ${color}`} {...rest} />
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
      </label>
    </div>
  );
}
