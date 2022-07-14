import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'
import contactsOperations from '../../../redux/contacts/contacts-operations'
import authSelectors from '../../../redux/auth/auth-selectors'

export class ContactsPage extends Component {
    async componentDidMount() {
        const { isLoginUser, getContacts } = this.props
        if (isLoginUser) {
            await getContacts()
        }
    }
    render() {
        return (
            <>
                <ContactForm />
                <h2>Contacts</h2>
                <Filter />
                <ContactList />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoginUser: authSelectors.isLoginUser(state),
})

const mapDispatchToProps = {
    getContacts: contactsOperations.getContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)
