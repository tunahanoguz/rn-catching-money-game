import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

function ScoreItem({ navigation, scoreID, totalScore, date }) {
    function goToScoreDetail() {
        navigation.navigate('ScoreDetailScreen', { id: scoreID });
    }

    return (
        <TouchableOpacity style={styles.item} onPress={goToScoreDetail}>
            <Text style={styles.scoreText}>{totalScore}</Text>
            <Text style={styles.dateText}>{date}</Text>
        </TouchableOpacity>
    );
}

ScoreItem.propTypes = {
    scoreID: PropTypes.string.isRequired,
    totalScore: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

export default ScoreItem;