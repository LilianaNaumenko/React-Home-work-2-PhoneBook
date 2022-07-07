import React from 'react'
import s from './App.module.css'
import ContactForm from './components/PhoneBook/ContactForm/ContactForm'
import ContactList from './components/PhoneBook/ContactList/ContactList'
import Filter from './components/PhoneBook/Filter/Filter'
import { connect } from 'react-redux'

function App() {
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

const mapStateToProps = (state) => ({
    contacts: state.contacts,
})

export default connect(mapStateToProps)(App)
