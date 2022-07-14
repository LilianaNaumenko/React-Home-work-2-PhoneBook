import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import authSelectors from '../../../redux/auth/auth-selectors'

const PublicRoute = ({ component: Component, isLoginUser, ...routeProps }) => {
    return (
        <Route
            {...routeProps}
            render={(props) =>
                isLoginUser && routeProps.restricted ? (
                    <Redirect to="/contacts" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    )
}

const mapStateToProps = (state) => ({
    isLoginUser: authSelectors.isLoginUser(state),
})

export default connect(mapStateToProps)(PublicRoute)
