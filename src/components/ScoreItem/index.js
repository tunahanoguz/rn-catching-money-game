import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

function ScoreItem({ totalScore, date }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.scoreText}>{totalScore}</Text>
            <Text style={styles.dateText}>{date}</Text>
        </TouchableOpacity>
    );
}

ScoreItem.propTypes = {
    totalScore: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

export default ScoreItem;