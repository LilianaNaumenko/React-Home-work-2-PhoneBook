import React, { Component } from 'react'
import { connect } from 'react-redux'
import authOperation from '../../../redux/auth/auth-operations'
import s from '../Login/Login.module.css'

export class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onLogin(this.state)

        this.setState({ email: '', password: '' })
    }

    render() {
        const { email, password } = this.state
        return (
            <form
                autocomplete="off"
                className={s.form}
                onSubmit={this.handleSubmit}
            >
                <label className={s.label}>
                    Email
                    <input
                        className={s.input}
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <label className={s.label}>
                    Password
                    <input
                        className={s.input}
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>
                <button className={s.button} type="submit">
                    Log In
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    onLogin: authOperation.login,
}

export default connect(null, mapDispatchToProps)(Login)
