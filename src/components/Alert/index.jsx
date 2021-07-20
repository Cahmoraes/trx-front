import iconAlertSuccess from "../../assets/images/icons/icon-success.svg";
import iconAlertInfo from "../../assets/images/icons/icon-info.svg";
import iconAlertWarning from "../../assets/images/icons/icon-alert.svg";
import iconAlertError from "../../assets/images/icons/icon-error.svg";

export function Alert(props) {
  const className = props.className ? `alert ${props.className}` : "alert";
  return (
    <>
      <div className={className}>
        <div className="icon-component">
          {props.className === "alert-warning" && (
            <img
              src={iconAlertWarning}
              alt=""
              className="icon-alert icon-warming"
            />
          )}
          {props.className === "alert-error" && (
            <img
              src={iconAlertError}
              alt=""
              className="icon-alert icon-error"
            />
          )}
          {props.className === "alert-success" && (
            <img
              src={iconAlertSuccess}
              alt=""
              className="icon-alert icon-success"
            />
          )}
          {props.className === "alert-info" && (
            <img src={iconAlertInfo} alt="" className="icon-alert icon-info" />
          )}
          <span>{props.text}</span>
        </div>
        <button className="btn"></button>
      </div>
    </>
  );
}
