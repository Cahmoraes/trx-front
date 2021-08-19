export function ToggleSwitch({ children, ...rest }) {
	return (
		<>
			<label className="c-switch">
				<input type="checkbox" {...rest} />
				<span className="c-switch__slider c-switch__slider--rounded"></span>
			</label>
			<span className="c-switch__label">{children}</span>
		</>
	)
}
