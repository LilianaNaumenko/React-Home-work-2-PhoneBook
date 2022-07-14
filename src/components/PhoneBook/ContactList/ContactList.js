import React from 'react'
import s from '../ContactList/ContactList.module.css'
import slideTransition from './slideTransition.module.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import contactsOperations from '../../../redux/contacts/contacts-operations'
import { getContacts, filterContacts } from '../../../redux/contacts/contacts-selectors'

function ContactList({ filter, contacts, onContactsDelete }) {
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
            <TransitionGroup component="ul">
                {list.map(({ id, name, number }) => (
                    <CSSTransition
                        key={id}
                        timeout={250}
                        classNames={slideTransition}
                    >
                        <li className={s.list}>
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

const mapStateToProps = (state) => ({
    contacts: getContacts(state),
    filter: filterContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
    onContactsDelete: (id) => dispatch(contactsOperations.deleteContacts(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
