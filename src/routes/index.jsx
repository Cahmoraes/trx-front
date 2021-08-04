import { Switch } from 'react-router-dom'
import { Route } from './Route'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { SiteMap } from '../pages/SiteMap'
import { StyleGuide } from '../pages/Style-guide'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" hasHeader={false} hasFooter={false} component={SiteMap} />
      <Route path="/style-guide" hasHeader={false} hasFooter={false} component={StyleGuide} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}
