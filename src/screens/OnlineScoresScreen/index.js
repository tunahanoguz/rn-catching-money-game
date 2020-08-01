import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ScoreItem } from '../../components';

function OnlineScoresScreen({ scores }) {
    return (
        <View style={{ flex: 1, padding: 30, }}>
            { console.log(scores) }
            <FlatList
                data={scores}
                renderItem={({ item }) => <ScoreItem scoreID={item.id} totalScore={item.scores.score} date="{item.date}" />}
            />
        </View>
    );
}

OnlineScoresScreen.propTypes = {
    scores: PropTypes.array.isRequired,
};

export default OnlineScoresScreen;