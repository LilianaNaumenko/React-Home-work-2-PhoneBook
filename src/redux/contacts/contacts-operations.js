import axios from 'axios'
import actions from './contacts-actions'

axios.defaults.baseURL = 'https://62c154e5eff7f7856f0c51c6.mockapi.io'

const addContacts = (name, number) => (dispatch) => {
    const contacts = { name, number }

    dispatch(actions.addContactsRequest())

    axios
        .post('/contacts', contacts)
        .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
        .catch((error) => dispatch(actions.addContactsError(error)))
}

const deleteContacts = (id) => (dispatch) => {
    dispatch(actions.deleteContactsRequest())

    axios
        .delete(`/contacts/${id}`)
        .then(({ data }) => dispatch(actions.deleteContactsSuccess(data.id)))
        .catch((error) => dispatch(actions.deleteContactsError(error)))
}

const operations = { addContacts, deleteContacts }

export default operations
