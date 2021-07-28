export function ToggleSwitch({ children, ...rest }) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" {...rest} />
        <span className="switch__slider switch__slider--rounded"></span>
      </label>
      <span className="switch__label">{children}</span>
    </>
  )
}