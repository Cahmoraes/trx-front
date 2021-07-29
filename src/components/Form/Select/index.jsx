export function Select({ id, name, children, message, error = false, ...rest }) {
  return (
    <div className="c-select">
      <label className="c-select__label" htmlFor={id}>
        {message}
      </label>
      <select className={`c-select__select ${error ? 'is-invalid' : ''}`} name={name} {...rest}>
        {children}
      </select>
    </div>
  );
}
