export function Radio({ id, name, children, ...rest }) {
  return (
    <div className="c-radio">
      <label htmlFor={id}>
        <input className="c-radio__button" type="radio" id={id} name={name} value={children} {...rest} />
        <span className="c-radio__checkmark"></span>
        {children && (
          <span className="c-radio__text">{children}</span>
        )}
      </label>
    </div>
  );
}
