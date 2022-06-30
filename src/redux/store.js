import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import contactsReducer from './contacts/contacts-reducer'

const store = configureStore({
    reducer: contactsReducer,
})

export default store
