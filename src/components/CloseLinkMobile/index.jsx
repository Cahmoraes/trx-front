import { Link } from "react-router-dom";

import arrowIcon from "../../assets/images/icons/close-blue.svg";

export function CloseLinkMobile({ to = "/", children = "Fechar" }) {
  return (
    <div className="close-link">
      <Link to={to}>
        {children}
        <img src={arrowIcon} alt="" />
      </Link>
    </div>
  );
}
