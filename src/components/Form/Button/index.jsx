export function Button ({ color="primary", children, ...rest }) {
  return (
    <button
      className={`btn ${color}`}
      {...rest}
    >
      {children}
    </button>
  )
}
