import { ReactComponent as IconAlertSuccess } from '../../assets/images/icons/success.svg'
import { ReactComponent as IconAlertWarning } from '../../assets/images/icons/warning.svg'
import { ReactComponent as IconAlertInfo } from '../../assets/images/icons/info.svg'
import { ReactComponent as IconAlertInvalid } from '../../assets/images/icons/invalid.svg'
import { ReactComponent as IconAlertLamp } from '../../assets/images/icons/lamp.svg'
import { ReactComponent as IconClose } from '../../assets/images/icons/close.svg'

export function Alert({ children, color, showIcon = true }) {
	return (
		<div className={`c-alert c-alert--${color || ''}`}>
			<div className="c-alert__content">
				<div className="c-alert__icon">
					{color === 'warning' && (
						<IconAlertWarning className="icon-alert icon-warning" />
					)}
					{color === 'error' && (
						<IconAlertInvalid className="icon-alert icon-error" />
					)}
					{color === 'success' && (
						<IconAlertSuccess className="icon-alert icon-success" />
					)}
					{color === 'info' && <IconAlertInfo className="icon-alert icon-info" />}
					{color === 'lamp' && <IconAlertLamp className="icon-alert icon-lamp" />}
				</div>
				<span>{children}</span>
			</div>
			{showIcon && (
				<button>
					<IconClose />
				</button>
			)}
		</div>
	)
}
