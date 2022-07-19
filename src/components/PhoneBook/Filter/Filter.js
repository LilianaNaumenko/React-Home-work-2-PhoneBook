import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from '../Filter/Filter.module.css'
import contactsActions from '../../../redux/contacts/contacts-actions'
import contactsSelectors from '../../../redux/contacts/contacts-selectors'

export default function Filter() {
    const dispatch = useDispatch()
    const value = useSelector(contactsSelectors.filterContacts)

    const onFindContacts = useCallback(
        (e) => dispatch(contactsActions.filterContacts(e.target.value)),
        [dispatch]
    )

    return (
        <div className={s.container}>
            <p>Find contacts by name</p>
            <input
                autocomplete="off"
                className={s.input}
                type="text"
                value={value}
                name="find"
                onChange={onFindContacts}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </div>
    )
}
