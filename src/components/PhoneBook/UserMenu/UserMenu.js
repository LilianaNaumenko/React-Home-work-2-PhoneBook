import React from 'react'
import { connect } from 'react-redux'
import authOperations from '../../../redux/auth/auth-operations'

import authSelectors from '../../../redux/auth/auth-selectors'

function UserMenu({ name, onLogout }) {
    return (
        <div>
            <span>Welcome, {name}</span>
            <button type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: authSelectors.getUserName(state),
})

const mapDispatchToProps = {
    onLogout: authOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
