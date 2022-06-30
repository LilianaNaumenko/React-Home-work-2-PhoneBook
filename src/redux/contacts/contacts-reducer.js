import { createReducer, combineReducers } from '@reduxjs/toolkit'
import actions from './contacts-actions'

const contacts = createReducer([], {
    [actions.addContacts]: (state, { payload }) => {
        const formattedName =
            payload.name.charAt(0).toUpperCase() + payload.name.slice(1)

        if (
            state.find(
                (el) => el.name.toLowerCase() === payload.name.toLowerCase()
            )
        ) {
            return alert(`${formattedName} is already in contacts`)
        }

        return [...state, { ...payload, name: formattedName }]
    },
    [actions.deleteContacts]: (state, { payload }) => [
        ...state.filter((el) => el.id !== payload),
    ],
    [actions.storageContacts]: (_, { payload }) => payload,
})

const filter = createReducer('', {
    [actions.filterContacts]: (_, { payload }) => payload,
})

export default combineReducers({
    contacts,
    filter,
})
