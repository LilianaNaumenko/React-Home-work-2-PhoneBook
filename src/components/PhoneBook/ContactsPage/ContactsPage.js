import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'
import contactsOperations from '../../../redux/contacts/contacts-operations'
import authSelectors from '../../../redux/auth/auth-selectors'
import contactsSelectors from '../../../redux/contacts/contacts-selectors'
import s from '../ContactsPage/ContactsPage.module.css'

export default function ContactsPage() {
    const dispatch = useDispatch()
    const isLoginUser = useSelector(authSelectors.isLoginUser)
    const isContacts = useSelector(contactsSelectors.getContacts)

    const getContacts = useCallback(
        () => dispatch(contactsOperations.getContacts()),
        [dispatch]
    )

    useEffect(() => {
        if (isLoginUser) {
            getContacts()
        }
    }, [isLoginUser, getContacts])

    return (
        <>
            <ContactForm />
            {isContacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
            {isContacts.length >= 2 && <Filter />}

            <ContactList />
        </>
    )
}
