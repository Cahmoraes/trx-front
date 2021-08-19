export function Badge({ color = 'primary', children }) {
	return <div className={`c-badge ${color}`}>{children}</div>
}
