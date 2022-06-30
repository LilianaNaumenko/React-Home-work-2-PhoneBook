import React, { Component } from 'react'
import s from './App.module.css'
import ContactForm from './components/PhoneBook/ContactForm/ContactForm'
import ContactList from './components/PhoneBook/ContactList/ContactList'
import Filter from './components/PhoneBook/Filter/Filter'
import { connect } from 'react-redux'
import contactsActions from './redux/contacts/contacts-actions'

class App extends Component {
    componentDidMount = () => {
        const savedContacts = localStorage.getItem('contacts')
        const parseContacts = JSON.parse(savedContacts)

        if (parseContacts) {
            this.props.storageContacts(parseContacts)
        }
    }

    componentDidUpdate = () =>
        localStorage.setItem('contacts', JSON.stringify(this.props.contacts))

    render() {
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
                </header>
                <main className={s.main}>
                    <ContactForm />
                    <h2>Contacts</h2>
                    <Filter />
                    <ContactList />
                </main>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts,
})

const mapDispatchToProps = (dispatch) => ({
    storageContacts: (contacts) =>
        dispatch(contactsActions.storageContacts(contacts)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
