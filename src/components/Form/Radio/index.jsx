export function Radio({ id, name, children, ...rest }) {
  return (
    <div className="radio">
      <label htmlFor={id}>
        <input className="radio__button" type="radio" id={id} name={name} value={children} {...rest} />
        <span className="radio__checkmark"></span>
        {children && (
          <span className="radio__text">{children}</span>
        )}
      </label>
    </div>
  );
}
