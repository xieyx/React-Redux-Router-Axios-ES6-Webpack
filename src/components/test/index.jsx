import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import assign from 'object-assign';
import { getMain } from '../../reducers';
import * as mainAction from '../../actions/main';
import Test from './test';

const mapStateToProps = (state, props) => {
    return {
        ...getMain(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = assign({}, mainAction);
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);