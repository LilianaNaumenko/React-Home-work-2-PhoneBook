const getUserName = (state) => state.auth.user.name
const isLoginUser = (state) => state.auth.isLogin

const selectors = { getUserName, isLoginUser }
export default selectors
