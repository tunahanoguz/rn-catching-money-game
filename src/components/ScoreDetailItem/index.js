import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

function ScoreDetailItem({ scoreTitle, totalScore }) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{ scoreTitle }</Text>
            <Text>{ totalScore }</Text>
        </View>
    );
}

ScoreDetailItem.propTypes = {
    scoreTitle: PropTypes.string.isRequired,
    totalScore: PropTypes.number.isRequired,
};

export default ScoreDetailItem;