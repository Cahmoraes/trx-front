export function ToggleSwitch({ children, ...rest }) {
  return (
    <>
      <label class="switch">
        <input type="checkbox" {...rest} />
        <span class="slider round"></span>
      </label>
      <span class="switch__label">{children}</span>
    </>
  )
}