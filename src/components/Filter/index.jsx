import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Filter = ({value, onChange}) => {
    const handleInputChange = (event) => {
        onChange(event.currentTarget.value)
    }

    return (<div className={styles.wrapper}>
        <label>Find contacts by name
            <input
                onChange={handleInputChange}
                value={value}
                type="text"
                className={styles.input}
            />
        </label>
    </div>)
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter