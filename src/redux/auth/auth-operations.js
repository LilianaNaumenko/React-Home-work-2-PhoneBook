import axios from 'axios'
import authActions from './auth-actions'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
}

const register = (credentials) => async (dispath) => {
    dispath(authActions.registerRequest())

    try {
        const response = await axios.post('/users/signup', credentials)

        token.set(response.data.token)
        dispath(authActions.registerSuccess(response.data))
    } catch (error) {
        dispath(authActions.registerError(error.message))
    }
}

const login = (credentials) => async (dispath) => {
    console.log('login')
    dispath(authActions.loginRequest())

    try {
        const response = await axios.post('/users/login', credentials)
        token.set(response.data.token)
        dispath(authActions.loginSuccess(response.data))
    } catch (error) {
        dispath(authActions.loginError(error.message))
    }
}

const logout = () => async (dispath) => {
    dispath(authActions.logoutRequest())

    try {
        await axios.post('/users/logout')

        token.unset()
        dispath(authActions.logoutSuccess())
    } catch (error) {
        dispath(authActions.logoutError(error.message))
    }
}

const getCurrentUser = () => async (dispath, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState()

    if (!persistedToken) {
        return
    }

    token.set(persistedToken)
    dispath(authActions.getCurrentUserRequest())

    try {
        const response = await axios.get('users/current')

        dispath(authActions.getCurrentUserSuccess(response.data))
    } catch (error) {
        dispath(authActions.getCurrentUserError(error.message))
    }
}

const operations = { register, login, logout, getCurrentUser }

export default operations
