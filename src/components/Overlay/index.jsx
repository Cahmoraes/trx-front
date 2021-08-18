import { useOverlay } from '../../hooks/useOverlay'

export function Overlay() {
	const { visibleOverlay } = useOverlay()

	return (
		<div
			className={`l-overlay ${visibleOverlay ? 'l-overlay--is-active' : ''} `}
		></div>
	)
}
