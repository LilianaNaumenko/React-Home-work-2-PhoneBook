import React, { Component } from 'react'
import { connect } from 'react-redux'
import authOperation from '../../../redux/auth/auth-operations'

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Enter</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    onLogin: authOperation.login,
}

export default connect(null, mapDispatchToProps)(Login)
