import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from '../containers/layoutContainer';
import Demo from '../containers/demoContainer';
import Test from '../containers/testContainer';

const browserHistory = createBrowserHistory();

render(
    <Router history={browserHistory}>
        <Layout>
            <Route path="/" component={Demo} />
            <Route path="/test" component={Test} />
        </Layout>
    </Router>
    , document.getElementById('app')
)
