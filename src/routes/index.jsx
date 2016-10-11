import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Layout from '../containers/layoutContainer';
import Demo from '../containers/demoContainer';
import Test from '../containers/testContainer';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to="demo" />
            <Route path="demo" component={Demo} />
            <Route path="test" component={Test} />
        </Route>
    </Router>
    , document.getElementById('app')
)
