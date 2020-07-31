import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

function ScoreItem({ navigation, scoreID, totalScore, date }) {
    function goToScoreDetail() {
        navigation.navigate('ScoreDetailScreen', { id: scoreID });
    }

    return (
        <TouchableOpacity style={styles.item} onPress={goToScoreDetail}>
            <View style={styles.leftScoreItem}>
                <Text>Total Score</Text>
                <Text style={styles.scoreText}>{totalScore}</Text>
            </View>

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