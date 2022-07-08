const getUserName = (state) => state.auth.user.name
const isLoginUser = (state) => state.auth.token

const selectors = { getUserName, isLoginUser }
export default selectors
