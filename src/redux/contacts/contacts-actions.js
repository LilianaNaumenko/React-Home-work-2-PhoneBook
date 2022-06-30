import ContactsTypes from './contacts-types'
import { nanoid } from 'nanoid'

const addContacts = (name, number) => ({
    type: ContactsTypes.ADD,
    payload: { name, number, id: nanoid() },
})

const deleteContacts = (eId) => ({
    type: ContactsTypes.DELETE,
    payload: eId,
})

const filterContacts = (value) => ({
    type: ContactsTypes.CHANGE_FILTER,
    payload: value,
})

const storageContacts = (contacts) => ({
    type: ContactsTypes.LOCAL_STORAGE,
    payload: contacts,
})

const actions = { addContacts, deleteContacts, filterContacts, storageContacts }

export default actions
