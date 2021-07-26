export function Select({ id, name, children, message, error = false, ...rest }) {
  return (
    <div className="container-component">
      <label className="container-component__label" htmlFor={id}>
        {message}
      </label>
      <select className={`container-component__select ${error ? 'is-invalid' : ''}`} name={name} {...rest}>
        {children}
      </select>
    </div>
  );
}
