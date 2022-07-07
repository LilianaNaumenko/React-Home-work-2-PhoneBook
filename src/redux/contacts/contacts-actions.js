import { createAction } from '@reduxjs/toolkit'

const addContactsRequest = createAction('contacts/addContactsRequest')
const addContactsSuccess = createAction('contacts/addContactSuccess')
const addContactsError = createAction('contacts/addContactError')

const deleteContactsRequest = createAction('contacts/deleteContactsRequest')
const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess')
const deleteContactsError = createAction('contacts/deleteContactsError')

const filterContacts = createAction('contacts/changeFilter')

const actions = {
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    filterContacts,
}

export default actions
