import { Component } from "react";
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

class Filter extends Component {
    handleInputChange = (event) => {
        this.props.onChange(event.currentTarget.value)
    }

    render() {
        return (<div className={styles.wrapper}>
            <label>Find contacts by name
                <input
                    onChange={this.handleInputChange}
                    value={this.props.value}
                    type="text"
                    className={styles.input}
                />
            </label>
        </div>)
    }
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter