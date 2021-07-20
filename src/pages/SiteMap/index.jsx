import { Link } from "react-router-dom";
import "./siteMap.scss";

export function SiteMap() {
  return (
    <div className="sitemap-body">
      <p className="desc">Sitemapp</p>
      <div className="content">
        <div>
          <ul>
            <li>
              <Link to="/style-guide" target="_blank">
                Componentes
              </Link>
            </li>
          </ul>
          <h3>Pages</h3>
          <ul>
            <li>
              <Link to="/Home" target="_blank">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registro</Link>
            </li>
            <li>
              <Link to="/result-search">Busca não encontrada</Link>
            </li>
            <li>
              <Link to="/recovery-password">Recuperar senha</Link>
            </li>
            <li>
              <Link to="/new-password">Nova senha</Link>
            </li>
            <li>
              <Link to="/Search">Busca</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
