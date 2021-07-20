import HelpIcon from "../../assets/images/icons/icon-help.svg";

export function Tooltip({ children, position = "right" }) {
  return (
    <div className={`tooltip ${position}`}>
      <img src={HelpIcon} alt="tooltip" />
      <span>{children}</span>
    </div>
  );
}
