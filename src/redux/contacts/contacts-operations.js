import axios from 'axios'
import actions from './contacts-actions'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const addContacts = (name, number) => async (dispatch) => {
    const contacts = { name, number }

    dispatch(actions.addContactsRequest())
    try {
        const response = await axios.post('/contacts', contacts)
        dispatch(actions.addContactsSuccess(response.data))
    } catch (error) {
        dispatch(actions.addContactsError(error.message))
    }
}

const deleteContacts = (id) => async (dispatch) => {
    dispatch(actions.deleteContactsRequest())
    try {
        await axios.delete(`/contacts/${id}`)
        dispatch(actions.deleteContactsSuccess(id))
    } catch (error) {
        dispatch(actions.deleteContactsError(error.message))
    }
}

const getContacts = () => async (dispatch) => {
    dispatch(actions.getContactsRequest())
    try {
        const response = await axios.get('/contacts')
        dispatch(actions.getContactsSuccess(response.data))
    } catch (error) {
        dispatch(actions.getContactsError(error.message))
    }
}

const operations = { addContacts, deleteContacts, getContacts }

export default operations
