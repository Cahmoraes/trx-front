export function Select({ id, name, children, className, message, error = false, ...rest }) {
  return (
    <div className="c-select">
      <label className="c-select__label" htmlFor={id}>
        {message}
      </label>
      <select className={`c-select__select ${className ? className : ''} ${error ? 'is-invalid' : ''}`} name={name} {...rest}>
        {children}
      </select>
    </div>
  );
}
