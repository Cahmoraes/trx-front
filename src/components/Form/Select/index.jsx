export function Select({ id, name, children, message, ...rest }) {
  return (
    <div className="container-component">
      <label className="container-component__label" htmlFor={id} />
      {message}
      <select className="container-component__select" name={name} {...rest}>
        {children}
      </select>
    </div>
  );
}
