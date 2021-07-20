export function Checkbox({ id, name, children, ...rest }) {
  return (
    <div className="checkbox">
      <label for={id}>
        <input type="checkbox" id={id} name={name} value={children} {...rest} />
        <span className="checkmark"></span>
        {children && (
          <span className="label-text">{children}</span>
        )}
      </label>
    </div>
  );
}
