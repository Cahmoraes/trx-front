import { useState } from 'react'
import { ReactComponent as VisibleIcon } from '../../../assets/images/icons/visible.svg'
import { ReactComponent as NotVisibleIcon } from '../../../assets/images/icons/not-visible.svg'
import { ReactComponent as EmailIcon } from '../../../assets/images/icons/email.svg'
import { ReactComponent as LockIcon } from '../../../assets/images/icons/lock.svg'

const iconTypes = (typeIcon) =>
	({
		visible: <VisibleIcon />,
		notVisible: <NotVisibleIcon />,
		email: <EmailIcon />,
		lock: <LockIcon />,
	}[typeIcon] || <VisibleIcon />)

export function Input({
	label,
	color,
	message,
	showIcon = false,
	iconType,
	link,
	href,
	children,
	className,
	...rest
}) {
	const [isFilled, setIsFilled] = useState(false)

	function handleFilled({ target }) {
		if (target.value.trim()) {
			setIsFilled(true)
		} else {
			setIsFilled(false)
		}
	}

	return (
		<div className={`c-input ${className ? className : ''}`}>
			<label className="c-input__label">
				{label}
				<input
					type="text"
					onChange={handleFilled}
					onBlur={handleFilled}
					className={`
            c-input__input ${color ? color : ''} ${isFilled ? 'is-filled' : ''}
          `}
					{...rest}
				/>

				{showIcon && <button className="has-icon">{iconTypes(iconType)}</button>}

				{message && (
					<div className="c-input__message">
						{color === 'error' && (
							<span className={`c-input__text-${color}`}>{message}</span>
						)}
					</div>
				)}
			</label>
		</div>
	)
}
