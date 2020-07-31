import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "./styles";

function ScoreItem({ totalScore, date }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.scoreText}>{totalScore}</Text>
            <Text style={styles.dateText}>{date}</Text>
        </TouchableOpacity>
    );
}

export default ScoreItem;