import { Switch } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SiteMap } from '../pages/SiteMap'
import { StyleGuide } from '../pages/Style-guide'
import {Route} from './Route'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SiteMap} />
      <Route path="/style-guide" component={StyleGuide} />
      <Route path="/home" component={Home} />
    </Switch>
  )
}
