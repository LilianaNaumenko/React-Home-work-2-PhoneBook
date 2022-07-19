import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import authSelectors from '../../../redux/auth/auth-selectors'

const PublicRoute = ({ isLoginUser, children, ...routeProps }) => {
    return (
        <Route {...routeProps}>
            {isLoginUser && routeProps.restricted ? (
                <Redirect to="/contacts" />
            ) : (
                children
            )}
        </Route>
    )
}

const mapStateToProps = (state) => ({
    isLoginUser: authSelectors.isLoginUser(state),
})

export default connect(mapStateToProps)(PublicRoute)
