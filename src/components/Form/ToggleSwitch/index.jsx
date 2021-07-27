export function ToggleSwitch({ children, ...rest }) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" {...rest} />
        <span className="switch__slider round"></span>
      </label>
      <span className="switch__label">{children}</span>
    </>
  )
}