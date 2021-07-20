import { Route, Switch } from "react-router-dom";
import { SiteMap } from "../pages/SiteMap";
import { StyleGuide } from "../pages/Style-guide";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ResultSearch } from "../pages/Result-search";
import { RecoveryPassword } from "../pages/RecoveryPassword";
import { NewPassword } from "../pages/NewPassword";
import { Search } from "../pages/Search";

export function Routes() {
  const itens = [
    { href: "#", link: "Cafeteira" },
    { href: "#", link: "Torradeira" },
    { href: "#", link: "Lorem Ipsum 2" },
    { href: "#", link: "Lorem Ipsum  3" },
    { href: "#", link: "Lorem Ipsum  4" },
  ];
  return (
    <Switch>
      <Route exact path="/" component={SiteMap} />
      <Route path="/style-guide" component={StyleGuide} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route
        path="/result-search"
        component={() => <ResultSearch list={itens} />}
      />
      <Route path="/recovery-password" component={RecoveryPassword} />
      <Route path="/new-password" component={NewPassword} />
      <Route path="/search" component={Search} />
    </Switch>
  );
}
