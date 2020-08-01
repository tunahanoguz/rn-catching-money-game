import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

function HomeButton({ bgColor, text, func }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={func}>
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
    );
}

HomeButton.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
};

HomeButton.defaultProps = {
    bgColor: 'red',
};

export default HomeButton;