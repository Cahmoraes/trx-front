import { ReactComponent as IconAlertSuccess } from "../../assets/images/icons/icon-success.svg";
import { ReactComponent as IconAlertWarning } from "../../assets/images/icons/icon-alert.svg";
import { ReactComponent as IconAlertError } from "../../assets/images/icons/icon-error.svg";
import { ReactComponent as IconClose } from "../../assets/images/icons/icon-close.svg";

export function Alert(props) {
  const className = props.className ? `alert ${props.className}` : "alert";
  return (
    <>
      <div className={className}>
        <div className="icon-component">
          {props.className === "alert-warning" && (
            <IconAlertWarning
              className="icon-alert icon-warning"
            />
          )}
          {props.className === "alert-error" && (
            <IconAlertError
              className="icon-alert icon-error"
            />
          )}
          {props.className === "alert-success" && (
            <IconAlertSuccess
              classIame="icon-alert icon-success"
            />
          )}
          <span>{props.text}</span>
        </div>
        <button className="btn">
          <IconClose />
        </button>
      </div>
    </>
  );
}
