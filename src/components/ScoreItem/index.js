import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import styles from "./styles";

function ScoreItem({ scoreID, totalScore, date }) {
    const navigation = useNavigation();

    function goToScoreDetail() {
        navigation.navigate('ScoreDetailScreen', { id: scoreID });
    }

    const trimmedDate = moment(date).format('LL')

    return (
        <TouchableOpacity style={styles.item} onPress={goToScoreDetail}>
            <View style={styles.leftScoreItem}>
                <Text>Total Score</Text>
                <Text style={styles.scoreText}>{totalScore}</Text>
            </View>

            <Text style={styles.dateText}>{trimmedDate}</Text>
        </TouchableOpacity>
    );
}

ScoreItem.propTypes = {
    scoreID: PropTypes.any.isRequired,
    totalScore: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
};

export default ScoreItem;