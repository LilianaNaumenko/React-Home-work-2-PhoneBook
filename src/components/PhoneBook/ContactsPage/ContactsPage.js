import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'
import contactsOperations from '../../../redux/contacts/contacts-operations'
import authSelectors from '../../../redux/auth/auth-selectors'
import contactsSelectors from '../../../redux/contacts/contacts-selectors'
import s from '../ContactsPage/ContactsPage.module.css'

export class ContactsPage extends Component {
    async componentDidMount() {
        const { isLoginUser, getContacts } = this.props
        if (isLoginUser) {
            await getContacts()
        }
    }
    render() {
        const { isContacts } = this.props
        return (
            <>
                <ContactForm />
                {isContacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
                {isContacts.length >= 2 && <Filter />}

                <ContactList />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoginUser: authSelectors.isLoginUser(state),
    isContacts: contactsSelectors.getContacts(state),
})

const mapDispatchToProps = {
    getContacts: contactsOperations.getContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)
