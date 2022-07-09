import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const ContactListItem = ({ id, name, number, onDeleteClick }) =>
    <li className={styles.listItem}>
        <span>{name}: {number}</span>
        <button onClick={onDeleteClick} id={id} className={styles.button} type="button">x</button>
    </li>
    
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}

export default ContactListItem