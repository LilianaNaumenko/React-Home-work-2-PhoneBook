import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperations from '../../../redux/auth/auth-operations'
import s from '../Register/Register.module.css'

export default function Register() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onRegister = () =>
        dispatch(authOperations.register({ name, email, password }))

    const handleChangeName = ({ target: { value } }) => {
        setName(value)
    }

    const handleChangeEmail = ({ target: { value } }) => {
        setEmail(value)
    }

    const handleChangePassword = ({ target: { value } }) => {
        setPassword(value)
    }

    const resetState = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onRegister()
        resetState()
    }

    return (
        <>
            <form autoComplete="off" className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    Name
                    <input
                        className={s.input}
                        value={name}
                        name="name"
                        onChange={handleChangeName}
                    />
                </label>
                <label className={s.label}>
                    Email
                    <input
                        className={s.input}
                        value={email}
                        name="email"
                        type="email"
                        onChange={handleChangeEmail}
                    />
                </label>
                <label className={s.label}>
                    Password
                    <input
                        className={s.input}
                        value={password}
                        name="password"
                        type="password"
                        onChange={handleChangePassword}
                    />
                </label>
                <button className={s.button} type="submit">
                    Register
                </button>
            </form>
        </>
    )
}
