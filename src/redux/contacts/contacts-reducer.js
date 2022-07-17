import { createReducer, combineReducers } from '@reduxjs/toolkit'
import actions from './contacts-actions'
import { toast } from 'react-toastify'

const {
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    getContactsRequest,
    getContactsSuccess,
    getContactsError,
} = actions

const contacts = createReducer([], {
    [addContactsSuccess]: (state, { payload }) => {
        const formattedName =
            payload.name.charAt(0).toUpperCase() + payload.name.slice(1)

        if (
            state.find(
                (el) => el.name.toLowerCase() === payload.name.toLowerCase()
            )
        ) {
            return toast.error(`${formattedName} is already in contacts`)
        }

        return [...state, { ...payload, name: formattedName }]
    },
    [deleteContactsSuccess]: (state, { payload }) => [
        ...state.filter((el) => el.id !== payload),
    ],
    [getContactsSuccess]: (_, { payload }) => payload,
})

const filter = createReducer('', {
    [actions.filterContacts]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
    [addContactsRequest]: () => true,
    [addContactsSuccess]: () => false,
    [addContactsError]: () => false,
    [deleteContactsRequest]: () => true,
    [deleteContactsSuccess]: () => false,
    [deleteContactsError]: () => false,
    [getContactsRequest]: () => true,
    [getContactsSuccess]: () => false,
    [getContactsError]: () => false,
})

export default combineReducers({
    contacts,
    filter,
    loading,
})
