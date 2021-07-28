import { ReactComponent as HelpIcon } from "../../assets/images/icons/icon-help.svg";

export function Tooltip({ children, position = "right" }) {
  return (
    <div className={`tooltip tooltip--is-${position}`}>
      <HelpIcon />
      <span>{children}</span>
    </div>
  );
}
