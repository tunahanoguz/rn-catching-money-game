import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

function RatingItem({ playerUsername, totalScore, date }) {
    return (
        <View style={styles.item}>
            <Text>{ playerUsername }</Text>

            <View style={styles.itemBottom}>
                <Text style={styles.totalScore}>{ totalScore }</Text>
                <Text>{ date }</Text>
            </View>
        </View>
    );
}

RatingItem.propTypes = {
    playerUsername: PropTypes.string.isRequired,
    totalScore: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

export default RatingItem;