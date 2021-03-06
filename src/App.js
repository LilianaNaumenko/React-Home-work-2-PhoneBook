import React, { useEffect } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
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
import Loader from './components/PhoneBook/Loader/Loader'
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
    const dispatch = useDispatch()
    const isLoginUser = useSelector(authSelectors.isLoginUser)

    useEffect(() => {
        dispatch(authOperations.getCurrentUser())
    }, [dispatch])

    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div className={s.containerUserMenu}>
                    <h1 className={s.logoTitle}>PhoneBook </h1>
                    <ul className={s.containerUserMenu}>
                        <NavLink
                            className={s.navLink}
                            to="/"
                            exact
                            activeClassName={s.activeNavLink}
                        >
                            Main
                        </NavLink>
                        {isLoginUser && (
                            <NavLink
                                className={s.navLink}
                                to="/contacts"
                                activeClassName={s.activeNavLink}
                            >
                                Contacts
                            </NavLink>
                        )}
                    </ul>
                </div>
                <div>
                    {isLoginUser ? (
                        <UserMenu />
                    ) : (
                        <>
                            {' '}
                            <NavLink
                                className={s.navLink}
                                to="/register"
                                activeClassName={s.activeNavLink}
                            >
                                Register
                            </NavLink>
                            <NavLink
                                className={s.navLink}
                                to="/login"
                                activeClassName={s.activeNavLink}
                            >
                                Login
                            </NavLink>{' '}
                        </>
                    )}
                </div>
            </header>
            <main>
                <Switch>
                    <Route exact path="/" restricted component={WelcomePage} />

                    <PrivateRoute path="/contacts">
                        <ContactsPage />
                    </PrivateRoute>

                    <PublicRoute path="/register" restricted>
                        <Register />
                    </PublicRoute>

                    <PublicRoute path="/login" restricted>
                        <Login />
                    </PublicRoute>
                </Switch>
            </main>
            <Loader />
        </div>
    )
}
