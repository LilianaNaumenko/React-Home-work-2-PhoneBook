import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import contactsReducer from './contacts/contacts-reducer'

const rootReducer = contactsReducer

const store = createStore(rootReducer, composeWithDevTools())

export default store
