import React, { Component } from 'react'
import { connect } from 'react-redux'
import authOperations from '../../../redux/auth/auth-operations'

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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input
                            value={name}
                            name="name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            value={email}
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            value={password}
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(Register)
