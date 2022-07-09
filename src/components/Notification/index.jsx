import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Notification = ({ title }) => <p className={styles.warning}>{title}</p>

Notification.propTypes = {
    title: PropTypes.string.isRequired
}

export default Notification