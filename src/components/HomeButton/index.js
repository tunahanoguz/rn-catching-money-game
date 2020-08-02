import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from "./styles";

function HomeButton({ bgColor, text, iconName, func }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={func}>
            <Text style={styles.buttonText}>{ text }</Text>
            <Icon name={iconName} color='white' size={26} />
        </TouchableOpacity>
    );
}

HomeButton.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
};

HomeButton.defaultProps = {
    bgColor: 'red',
};

export default HomeButton;