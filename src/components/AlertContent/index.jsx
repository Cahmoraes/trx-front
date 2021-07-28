import { ReactComponent as IconAlertSuccess } from "../../assets/images/icons/icon-success.svg";
import { ReactComponent as IconAlertWarning } from "../../assets/images/icons/icon-warning.svg";
import { ReactComponent as IconAlertInfo } from "../../assets/images/icons/icon-info.svg";
import { ReactComponent as IconAlertError } from "../../assets/images/icons/icon-error.svg";
import { ReactComponent as IconAlertLamp } from "../../assets/images/icons/icon-lamp.svg";
import { ReactComponent as IconClose } from "../../assets/images/icons/icon-close.svg";

export function AlertContent({ children, color, showIcon = false }) {
  console.log(color)
  return (
    <div className={`alert alert--${color ? color : ''}`}>
      <div className="alert__content">
        <div className="alert__icon">
          {color === "warning" && (
            <IconAlertWarning
              className="icon-alert icon-warning"
            />
          )}
          {color === "error" && (
            <IconAlertError
              className="icon-alert icon-error"
            />
          )}
          {color === "success" && (
            <IconAlertSuccess
              className="icon-alert icon-success"
            />
          )}
          {color === "info" && (
            <IconAlertInfo
              className="icon-alert icon-info"
            />
          )}
          {color === "lamp" && (
            <IconAlertLamp
              className="icon-alert icon-lamp"
            />
          )}
        </div>
        <span>{children}</span>
      </div>
      {
        showIcon && (
          <button className="btn">
            <IconClose />
          </button>
        )
      }
    </div>
  );
}
