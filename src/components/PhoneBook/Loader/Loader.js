import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from '../Loader/Loader.module.css'
import { ThreeDots } from 'react-loader-spinner'
import contactsSelectors from '../../../redux/contacts/contacts-selectors'

function Loader({ isLoading }) {
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <div className={s.wrapper}>
                <ThreeDots
                    height="65"
                    width="65"
                    color="Yellow"
                    ariaLabel="loading"
                />
            </div>
        )
    } else {
        return null
    }
}

const mapStateToProps = (state) => ({
    isLoading: contactsSelectors.isLoading(state),
})

export default connect(mapStateToProps)(Loader)
