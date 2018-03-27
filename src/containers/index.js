import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMain } from '../reducers';
import * as actions from '../actions/main';
import "../static/css/theme.less";

class Container extends Component {
    render() {
        console.log(this.props)
        return (
            <section className="container">
                {this.props.children}
            </section>
        )
    }
}

Container.propTypes = {
    children: PropTypes.element,
}

const mapStateToProps = (state, props) => {
    return {
        ...getMain(state),
    }
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);