import { Switch } from 'react-router-dom'
import { Route } from './Route'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { SiteMap } from '../pages/SiteMap'
import { StyleGuide } from '../pages/StyleGuide'
import { RecoveryPassword } from '../pages/RecoveryPassword'
import { NewAccount } from '../pages/NewAccount'
import { NewPassword } from '../pages/NewPassword'
import { ProductDetails } from '../pages/ProductDetails'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" hasHeader={false} hasFooter={false} component={SiteMap} />
      <Route path="/style-guide" hasHeader={false} hasFooter={false} component={StyleGuide} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/recovery-password" component={RecoveryPassword} />
      <Route path="/new-account" component={NewAccount} />
      <Route path="/new-password" component={NewPassword} />
      <Route path="/product-details" component={ProductDetails} />
    </Switch>
  )
}
