import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "./styles";

function ShowPlayerRankingButton() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Player Ranking</Text>
        </TouchableOpacity>
    );
}

export default ShowPlayerRankingButton;