import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import PrimaryHeader from '../components/ui/primaryHeader'
import AppHomePage from '../pages/homePage'

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={AppHomePage} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

PrimaryLayout.propTypes = {
  match: PropTypes.object,
}

export default PrimaryLayout
