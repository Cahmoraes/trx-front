import { Route, Switch } from "react-router-dom";
import { SiteMap } from "../pages/SiteMap";
import { StyleGuide } from "../pages/Style-guide";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SiteMap} />
      <Route path="/style-guide" component={StyleGuide} />
    </Switch>
  );
}
