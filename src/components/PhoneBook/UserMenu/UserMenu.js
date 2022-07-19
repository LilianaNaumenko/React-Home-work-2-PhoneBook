import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authOperations from '../../../redux/auth/auth-operations'
import authSelectors from '../../../redux/auth/auth-selectors'
import s from '../UserMenu/UserMenu.module.css'

export default function UserMenu() {
    const dispatch = useDispatch()
    const name = useSelector(authSelectors.getUserName)

    const onLogout = useCallback(() => {
        dispatch(authOperations.logout())
    }, [dispatch])

    return (
        <div>
            <span>Welcome, {name}</span>
            <button className={s.button} type="button" onClick={onLogout}>
                Logout 🇺🇦
            </button>
        </div>
    )
}
