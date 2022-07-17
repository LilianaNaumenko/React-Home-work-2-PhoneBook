import React, { Component } from 'react'
import { connect } from 'react-redux'
import authOperations from '../../../redux/auth/auth-operations'
import s from '../Register/Register.module.css'

export class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onRegister(this.state)

        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        const { name, email, password } = this.state
        return (
            <>
                <form
                    autoComplete="off"
                    className={s.form}
                    onSubmit={this.handleSubmit}
                >
                    <label className={s.label}>
                        Name
                        <input
                            className={s.input}
                            value={name}
                            name="name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={s.label}>
                        Email
                        <input
                            className={s.input}
                            value={email}
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={s.label}>
                        Password
                        <input
                            className={s.input}
                            value={password}
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className={s.button} type="submit">
                        Register
                    </button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(Register)
