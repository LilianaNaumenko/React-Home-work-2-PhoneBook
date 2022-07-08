import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './contacts/contacts-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './auth/auth-reducer'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
})

const persistor = persistStore(store)

export default { store, persistor }
