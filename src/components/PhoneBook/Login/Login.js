import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperation from '../../../redux/auth/auth-operations'
import s from '../Login/Login.module.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const onLogin = () => dispatch(authOperation.login({ email, password }))

    const handleChangeEmail = ({ target: { value } }) => {
        setEmail(value)
    }

    const handleChangePassword = ({ target: { value } }) => {
        setPassword(value)
    }

    const resetState = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onLogin()
        resetState()
    }

    return (
        <form autocomplete="off" className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                Email
                <input
                    className={s.input}
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </label>
            <label className={s.label}>
                Password
                <input
                    className={s.input}
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                />
            </label>
            <button className={s.button} type="submit">
                Log In
            </button>
        </form>
    )
}
