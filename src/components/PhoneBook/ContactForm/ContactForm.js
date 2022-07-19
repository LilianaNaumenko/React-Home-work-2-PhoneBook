import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from '../ContactForm/ContactForm.module.css'
import contactsOperations from '../../../redux/contacts/contacts-operations'
import contactsSelectors from '../../../redux/contacts/contacts-selectors'
import { toast } from 'react-toastify'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector(contactsSelectors.getContacts)

    const dispatch = useDispatch()
    const onContactsAdd = () =>
        dispatch(contactsOperations.addContacts(name, number))

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onNumberChange = (e) => {
        setNumber(e.target.value)
    }
    const resetState = () => {
        setName('')
        setNumber('')
    }
    const onButtonClick = (e) => {
        e.preventDefault()

        if (
            contacts.find((el) => el.name.toLowerCase() === name.toLowerCase())
        ) {
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
            return toast.error(`${formattedName} is already in contacts`)
        }

        if (name && number) {
            onContactsAdd()
            resetState()
        } else {
            toast.error('Not all data entered')
        }
    }

    return (
        <>
            <h2 className={s.title}>
                Add contacts of your loved ones, relatives, friends,
                acquaintances, classmates, colleagues, etc.💛
            </h2>
            <form autocomplete="off" className={s.form}>
                <label className={s.lable}>
                    Name
                    <input
                        className={s.input}
                        type="text"
                        value={name}
                        name="name"
                        onChange={onNameChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={s.lable}>
                    Number
                    <input
                        className={s.input}
                        type="tel"
                        value={number}
                        name="number"
                        onChange={onNumberChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={s.button} onClick={onButtonClick}>
                    Add
                </button>
            </form>
        </>
    )
}
