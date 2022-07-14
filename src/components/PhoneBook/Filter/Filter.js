import React from 'react'
import s from '../Filter/Filter.module.css'
import { connect } from 'react-redux'
import contactsActions from '../../../redux/contacts/contacts-actions'
import { filterContacts } from '../../../redux/contacts/contacts-selectors'

function Filter({ value, onFindContacts }) {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
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

const mapStateToProps = (state) => ({
    value: filterContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
    onFindContacts: (e) =>
        dispatch(contactsActions.filterContacts(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
