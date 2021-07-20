import { Link } from "react-router-dom";

import arrowIcon from "../../assets/images/icons/arrow-back-blue.svg";

export function BackLinkMobile({to = "/", children = "Voltar"}) {
  return (
    <div className="back-link">
      <Link to={to}>
        <img src={arrowIcon} alt="" />
        {children}
      </Link>
    </div>
  );
}
