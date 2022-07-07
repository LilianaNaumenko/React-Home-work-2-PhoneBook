import React, { Component } from 'react'
import s from '../ContactForm/ContactForm.module.css'
import { connect } from 'react-redux'
import contactsOperations from '../../../redux/contacts/contacts-operations'

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    onNumberChange = (e) => {
        this.setState({ number: e.target.value })
    }

    onButtonClick = (e) => {
        const { name, number } = this.state
        e.preventDefault()

        if (name && number) {
            this.props.onContactsAdd(name, number)
            this.setState({ name: '', number: '' })
        } else {
            alert('Not all data entered')
        }
    }

    render() {
        const { name, number } = this.state

        return (
            <form className={s.form}>
                <label className={s.lable}>
                    Name
                    <input
                        className={s.input}
                        type="text"
                        value={name}
                        name="name"
                        onChange={this.onNameChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={s.lable}>
                    Number
                    <input
                        className={s.input}
                        type="tel"
                        value={number}
                        name="number"
                        onChange={this.onNumberChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={s.button} onClick={this.onButtonClick}>
                    Add contacts
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onContactsAdd: (name, number) =>
        dispatch(contactsOperations.addContacts(name, number)),
})

export default connect(null, mapDispatchToProps)(ContactForm)
