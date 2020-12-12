import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Blog from 'components/pages/blog'
import Contact from 'components/pages/contact'
import MainPage from 'components/pages/main'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}

export default Routes