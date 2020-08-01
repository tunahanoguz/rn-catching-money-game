import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { ScoreItem } from '../../components';

function OfflineScoresScreen({ scores }) {
    return (
        <View style={{ flex: 1, padding: 30, }}>
            <FlatList
                data={scores}
                renderItem={({ item }) => <ScoreItem scoreID={item.id} totalScore={item.scores.score} date="{item.date}" />}
            />
        </View>
    );
}

OfflineScoresScreen.propTypes = {
    scores: PropTypes.array.isRequired,
};

export default OfflineScoresScreen;