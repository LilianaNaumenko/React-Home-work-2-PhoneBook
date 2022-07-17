const getContacts = (state) => state.contacts.contacts
const filterContacts = (state) => state.contacts.filter
const isLoading = (state) => state.contacts.loading

const selectors = { getContacts, filterContacts, isLoading }

export default selectors
