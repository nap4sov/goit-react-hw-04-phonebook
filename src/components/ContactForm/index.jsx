import { nanoid } from 'nanoid'
import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleInput = event => {
        const {name, value} = event.currentTarget
        
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
        
            default:
                break;
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        const contact = { name, number, id: nanoid() }
        onSubmit(contact)
        setName('')
        setNumber('')
    }
 

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}> Name
                <input
                    onChange={handleInput}
                    value={name}
                    className={styles.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={styles.label}> Number
                <input
                    onChange={handleInput}
                    value={number}
                    className={styles.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={styles.button} type="submit">Add contact</button>
        </form>)
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}