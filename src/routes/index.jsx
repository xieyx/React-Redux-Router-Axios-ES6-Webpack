import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { components } from '../components';
import Container from '../containers';

const browserHistory = createBrowserHistory();

export default (
            <Router history={browserHistory}>
                <Container>
                    <Route path="/" component={components.Test} />
                </Container>
            </Router>
        )

