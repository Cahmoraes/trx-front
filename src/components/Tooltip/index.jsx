import { ReactComponent as HelpIcon } from "../../assets/images/icons/question.svg";

export function Tooltip({ children, position = "right" }) {
  return (
    <div className={`c-tooltip c-tooltip--is-${position}`}>
      <HelpIcon />
      <span>{children}</span>
    </div>
  );
}
