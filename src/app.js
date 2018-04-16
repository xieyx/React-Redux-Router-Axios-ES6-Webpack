import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import configureStore from './store/configureStore'
import AuthorizedRoute from './components/AuthorizedRoute'
import UnauthorizedLayout from './layouts/unauthorizedLayout'
import PrimaryLayout from './layouts/primaryLayout'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UnauthorizedLayout} />
        <AuthorizedRoute path="/app" component={PrimaryLayout} />
        <Redirect to="/app" />
      </Switch>
    </BrowserRouter>
  </Provider>
)

render(
  <App />
  ,
  document.getElementById('app')
)
