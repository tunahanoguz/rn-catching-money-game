import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

function Input({ placeholder, value, setValue }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={text => setValue(text)}
        />
    );
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default Input;