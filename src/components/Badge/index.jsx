export function Badge({ color = "primary", children }) {
  return <div className={`badge ${color}`}>{children}</div>;
}
