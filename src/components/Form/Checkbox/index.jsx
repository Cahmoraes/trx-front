export function Checkbox({ id, name, children, ...rest }) {
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor={id}>
        <input className="checkbox__input" type="checkbox" id={id} name={name} value={children} {...rest} />
        <span className="checkbox__checkmark"></span>
        {children && (
          <span className="checkbox__text">{children}</span>
        )}
      </label>
    </div>
  );
}
