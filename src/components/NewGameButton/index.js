import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function NewGameButton() {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>New Game</Text>

            <View style={styles.firstCircle} />
            <View style={styles.secondCircle} />
            <View style={styles.thirdCircle} />
        </View>
    );
}

export default NewGameButton;