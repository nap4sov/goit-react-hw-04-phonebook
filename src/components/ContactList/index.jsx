import ContactListItem from "components/ContactListItem"
import Notification from "components/Notification"
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const ContactList = ({ contacts, onDeleteClick }) => {
    if (contacts.length === 0) {
        return (<Notification title='No contact with such name found' />)
    }
    
    return (<ul className={styles.list}>
        {contacts.map(({ id, name, number }) => 
            <ContactListItem key={id} id={id} name={name} number={number} onDeleteClick={onDeleteClick} />
        )}
    </ul>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteClick: PropTypes.func.isRequired
}

export default ContactList

