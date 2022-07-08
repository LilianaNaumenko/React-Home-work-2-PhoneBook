import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'

function ContactsPage() {
    return (
        <>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    )
}

export default ContactsPage
