import React, { Component } from 'react'
import { NavLink, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import s from './App.module.css'
import ContactsPage from './components/PhoneBook/ContactsPage/ContactsPage'
import Register from './components/PhoneBook/Register/Register'
import WelcomePage from './components/PhoneBook/WelcomePage/WelcomePage'
import Login from './components/PhoneBook/Login/Login'
import UserMenu from './components/PhoneBook/UserMenu/UserMenu'
import authSelectors from './redux/auth/auth-selectors'
import authOperations from './redux/auth/auth-operations'
import PrivateRoute from './components/PhoneBook/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PhoneBook/PublicRoute/PublicRoute'

class App extends Component {
    async componentDidMount() {
        const { getCurrentUser } = this.props

        await getCurrentUser()
    }

    render() {
        const { isLoginUser } = this.props
        return (
            <>
                <header className={s.header}>
                    <h1 className={s.logoTitle}>PhoneBook </h1>
                    <img
                        className={s.image}
                        width={25}
                        height={25}
                        src="https://cdn-icons-png.flaticon.com/512/4841/4841500.png"
                        alt=""
                    />
                    <ul>
                        <NavLink to="/">Welcome</NavLink>{' '}
                        {isLoginUser ? (
                            <>
                                <NavLink to="/contacts">Contacts</NavLink>
                                <UserMenu />
                            </>
                        ) : (
                            <>
                                <NavLink to="/register">Register</NavLink>
                                <NavLink to="/login">Login</NavLink>{' '}
                            </>
                        )}
                    </ul>
                </header>
                <main className={s.main}>
                    <Switch>
                        <PublicRoute
                            exact
                            path="/"
                            restricted
                            component={WelcomePage}
                        />
                        <PrivateRoute
                            path="/contacts"
                            component={ContactsPage}
                        />
                        <PublicRoute
                            path="/register"
                            restricted
                            component={Register}
                        />
                        <PublicRoute
                            path="/login"
                            restricted
                            component={Login}
                        />
                    </Switch>
                </main>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    isLoginUser: authSelectors.isLoginUser(state),
})

const mapDispatchToProps = {
    getCurrentUser: authOperations.getCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
