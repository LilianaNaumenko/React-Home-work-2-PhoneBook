import { combineReducers } from 'redux'
import ContactsTypes from './contacts-types'

const contacts = (state = [], { type, payload }) => {
    switch (type) {
        case ContactsTypes.ADD:
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

        case ContactsTypes.DELETE:
            return [...state.filter((el) => el.id !== payload)]

        case ContactsTypes.LOCAL_STORAGE:
            return payload

        default:
            return state
    }
}

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case ContactsTypes.CHANGE_FILTER:
            return payload
        default:
            return state
    }
}

export default combineReducers({
    contacts,
    filter,
})
