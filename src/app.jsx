import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Routes from './routes';

const store = configureStore();

render(
    <Provider store={store}>
        {Routes}
    </Provider>
    , document.getElementById('app')
)