import { ReactComponent as IconAlertSuccess } from "../../assets/images/icons/icon-success.svg";
import { ReactComponent as IconAlertWarning } from "../../assets/images/icons/icon-alert.svg";
import { ReactComponent as IconAlertError } from "../../assets/images/icons/icon-error.svg";
import { ReactComponent as IconClose } from "../../assets/images/icons/icon-close.svg";

export function Alert({text, color}) {
  return (
    <>
      <div className={`alert ${color ? color : ''}`}>
        <div className="icon-component">
          {color === "alert-warning" && (
            <IconAlertWarning
              className="icon-alert icon-warning"
            />
          )}
          {color === "alert-error" && (
            <IconAlertError
              className="icon-alert icon-error"
            />
          )}
          {color === "alert-success" && (
            <IconAlertSuccess
              classIame="icon-alert icon-success"
            />
          )}
          <span>{text}</span>
        </div>
        <button className="btn">
          <IconClose />
        </button>
      </div>
    </>
  );
}
