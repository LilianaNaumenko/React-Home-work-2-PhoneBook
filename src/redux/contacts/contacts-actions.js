import { nanoid } from 'nanoid'
import { createAction } from '@reduxjs/toolkit'

const addContacts = createAction('contacts/add', (name, number) => {
    return {
        payload: { name, number, id: nanoid() },
    }
})

const deleteContacts = createAction('contacts/delete')
const filterContacts = createAction('contacts/changeFilter')
const storageContacts = createAction('contacts/storage')

console.log(deleteContacts)

const actions = { addContacts, deleteContacts, filterContacts, storageContacts }

export default actions

// const addContacts = (name, number) => ({
//     type: ContactsTypes.ADD,
//     payload: { name, number, id: nanoid() },
// })

// const deleteContacts = (eId) => ({
//     type: ContactsTypes.DELETE,
//     payload: eId,
// })

// const filterContacts = (value) => ({
//     type: ContactsTypes.CHANGE_FILTER,
//     payload: value,
// })

// const storageContacts = (contacts) => ({
//     type: ContactsTypes.LOCAL_STORAGE,
//     payload: contacts,
// })
