export function RadioButton({ id, name, children, ...rest }) {
  return (
    <div className="radio-button">
      <label for={id}>
        <input type="radio" id={id} name={name} value={children} {...rest} />
        <span className="checkmark"></span>
        {children && (
          <span className="label-text">{children}</span>
        )}
      </label>
    </div>
  );
}
