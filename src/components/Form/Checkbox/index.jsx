export function Checkbox({ id, name, children, ...rest }) {
	return (
		<div className="c-checkbox">
			<label className="c-checkbox__label" htmlFor={id}>
				<input
					className="c-checkbox__input"
					type="checkbox"
					id={id}
					name={name}
					value={children}
					{...rest}
				/>
				<span className="c-checkbox__checkmark"></span>
				{children && <span className="c-checkbox__text">{children}</span>}
			</label>
		</div>
	)
}
