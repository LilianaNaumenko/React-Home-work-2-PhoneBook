import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from '../ContactList/ContactList.module.css'
import slideTransition from './slideTransition.module.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import contactsOperations from '../../../redux/contacts/contacts-operations'
import contactsSelectors from '../../../redux/contacts/contacts-selectors'

export default function ContactList() {
    const dispatch = useDispatch()
    const contacts = useSelector(contactsSelectors.getContacts)
    const filter = useSelector(contactsSelectors.filterContacts)

    const onContactsDelete = useCallback(
        (id) => dispatch(contactsOperations.deleteContacts(id)),
        [dispatch]
    )

    function getFilteredContacts() {
        const normalize = filter.toLowerCase()
        const visibleContacts = contacts.filter((el) =>
            el.name.toLowerCase().includes(normalize)
        )

        return visibleContacts || []
    }

    const list = filter ? getFilteredContacts() : contacts
    return (
        <div>
            <TransitionGroup className={s.list} component="ul">
                {list.map(({ id, name, number }) => (
                    <CSSTransition
                        key={id}
                        timeout={250}
                        classNames={slideTransition}
                    >
                        <li className={s.listItems}>
                            {`${name}: ${number}`}
                            <button
                                className={s.button}
                                onClick={() => onContactsDelete(id)}
                            >
                                Delete
                            </button>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}
