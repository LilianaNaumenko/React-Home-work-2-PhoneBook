import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import authSelectors from '../../../redux/auth/auth-selectors'

const PrivateRoute = ({ component: Component, isLoginUser, ...routeProps }) => (
    <Route
        {...routeProps}
        render={(props) =>
            isLoginUser ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
)

const mapStateToProps = (state) => ({
    isLoginUser: authSelectors.isLoginUser(state),
})

export default connect(mapStateToProps)(PrivateRoute)
