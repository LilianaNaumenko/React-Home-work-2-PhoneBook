import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import authSelectors from '../../../redux/auth/auth-selectors'

const PrivateRoute = ({ isLoginUser, children, ...routeProps }) => (
    <Route {...routeProps}>
        {isLoginUser ? children : <Redirect to="/login" />}
    </Route>
)

const mapStateToProps = (state) => ({
    isLoginUser: authSelectors.isLoginUser(state),
})

export default connect(mapStateToProps)(PrivateRoute)
