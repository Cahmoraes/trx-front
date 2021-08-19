export function Hiperlink({ size, href, children }) {
	return (
		<a href={href} className={`c-hiperlink c-hiperlink__${size}`}>
			{children}
		</a>
	)
}
