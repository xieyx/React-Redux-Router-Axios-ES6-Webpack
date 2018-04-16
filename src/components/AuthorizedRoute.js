import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getUserInfo } from '../actions/auth'

class AuthorizedRoute extends React.Component {
  componentWillMount () {
    nprogress.start()
    const { actions } = this.props
    actions.getUserInfo()
  }

  componentDidMount () {
    nprogress.done()
  }

  render () {
    const {
      component: Component,
      authing,
      isAuthenticated,
      ...rest
    } = this.props

    return (
      <Route
        {...rest}
        render={
          (props) => {
            if (authing) return <div>Loading...</div>
            return isAuthenticated
              ? <Component {...props} />
              : <Redirect to="/auth/login" />
          }
        }
      />
    )
  }
}

AuthorizedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authing: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  actions: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    authing: state.auth.authing,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      getUserInfo,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute)
