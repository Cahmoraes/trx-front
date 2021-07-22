export function Button ({ color = "primary", bold = false, children, ...rest }) {
  return (
    <button
      className={`btn ${color} ${bold ? 'u-bold':''}`}
      {...rest}
    >
      {children}
    </button>
  )
}
